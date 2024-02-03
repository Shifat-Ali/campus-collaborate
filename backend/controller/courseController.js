const pool = require('../db/pool')
async function getCourses(req,res){
    const {user_id} = req.query
    try{
        const fromDate = new Date()
        const result = await pool.query('SELECT * FROM backend.users_courses INNER JOIN backend.courses ON backend.users_courses.course_id = backend.courses.id WHERE backend.users_courses.user_id = $1', [user_id])
        //tags of the courses taken.
        console.table(result.rows);
        const toDate = new Date()
        const response ={
            rows:result.rows,
            elapsed:toDate.getTime()-fromDate.getTime(),
            method:'pool'
        }
        res.status(200).json(response)
    }
    catch (err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

async function addCourse(req,res){
    //one extra query if we only have the current users email

    let {user_id,title,description,url,tags} = req.body
    if(!user_id || !title || !description || !url || !tags){
        return res.status(400).json({err:"Incomplete parameters"})
    }

    //check if url is already present
    try{
        var urlExist = await pool.query("SELECT id FROM backend.courses WHERE url=$1",[url])
        console.log(urlExist.rows);
    }
    catch (err){
        return res.status(500).json({err:err.message})
    }

    if(urlExist.rows.length !==0){
        console.log("exists just add to user")
        //exists, just add to user_course
        try{
            //if user has already taken it
            const courseId = urlExist.rows[0].id
            console.log(courseId)
            const alreadyHaveIt = await pool.query("SELECT * FROM backend.users_courses WHERE user_id=$1 AND course_id = $2",[user_id,courseId])
            if(alreadyHaveIt.rows.length !==0){
                return res.status(400).json({err:"You already have taken this course"})
            }
            const addToUserCourse = await pool.query("INSERT INTO backend.users_courses(user_id,course_id) VALUES($1,$2)",[user_id,courseId])
            const returnCourse = await pool.query("SELECT * FROM backend.users_courses INNER JOIN backend.courses ON backend.users_courses.course_id = backend.courses.id WHERE backend.courses.id = $1 AND backend.users_courses.user_id = $2 ",[courseId,user_id])
            // complete query
            res.status(200).json(returnCourse.rows)
        }catch (err){
            console.log("this one:"+err.message)
            res.status(500).json({err:err.message})
        }
    }
    else{
        console.log("making new")
        try{
            //adding a new course
            const addedCourse = await pool.query("INSERT INTO backend.courses(title,description,url) VALUES ($1,$2,$3) RETURNING id",[title,description,url])
            const newId = addedCourse.rows[0].id;
            console.log(addedCourse.rows)

            //tags is a list of strings
            for (const tag of tags) {
                // Check if already present
                const tagP = await pool.query("SELECT id FROM backend.tags WHERE tag_name = $1", [tag]);

                if (tagP.rows.length === 0) {
                    const newTagId = await pool.query("INSERT INTO backend.tags(tag_name,creator_id,created_at) VALUES ($1,$2,$3) RETURNING id",
                        [tag, user_id, new Date()]);

                    await pool.query("INSERT INTO backend.courses_tags(tag_id,course_id) VALUES ($1,$2)",
                        [newTagId.rows[0].id, newId]);
                } else {
                    await pool.query("INSERT INTO backend.courses_tags(tag_id,course_id) VALUES ($1,$2)",
                        [tagP.rows[0].id, newId]);
                }
            }

            const final = await pool.query("INSERT INTO backend.users_courses(user_id,course_id) VALUES($1,$2)",[user_id,newId])
            const result =await pool.query("SELECT * FROM backend.courses WHERE id=$1",[newId])
            console.log(result.rows)
            res.status(200).send(result.rows)

        }catch (err){
            console.log("why?"+ err.message)
            res.status(500).json({err:err.message})
        }
    }
}

module.exports= {
    getCourses,
    addCourse
}