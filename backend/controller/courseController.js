const pool = require('../db/pool')
const {response} = require("express");
async function getCoursesForUser(req, res){
    const {user_id} = req.body
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
async function getAllCourses(req,res){
    let {page,limit} = req.body
    try{
        let result = {}
        const maxLimit = 10;
        if (isNaN(limit) || limit > maxLimit) limit = maxLimit;
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;
        let results = await pool.query("SELECT COUNT(id) as count FROM backend.courses");
        const count = results.rows[0].count;
        if (page > 1) {
            result.previous = {
                page: page - 1,
                limit: limit,
            }
        }
        if (endIndex < count) {
            result.next = {
                page: page + 1,
                limit: limit,
            }
        }
        let courses =[]
        const response = await pool.query("SELECT courses.id as id,count(*) as numofrates FROM backend.courses LEFT OUTER JOIN backend.user_course_ratings ON courses.id = user_course_ratings.course_id GROUP BY (courses.id) ORDER BY count(*) DESC OFFSET $1 LIMIT $2", [startIndex, limit]);
        for (let course of response.rows) {
            let tempCourse = {}
            tempCourse.id = course.id
            tempCourse.numOfRates = course.numofrates
            let titleQuery = await pool.query("SELECT title,description FROM backend.courses WHERE id = $1", [course.id]);
            tempCourse.title = titleQuery.rows[0].title;
            tempCourse.description = titleQuery.rows[0].description;

            let ratesQuery = await pool.query("SELECT AVG(course_relevance_rating) as r1, AVG(understandability_rating) as r2, AVG(ease_of_scoring_rating) as r3, AVG(faculty_rating) as r4 FROM backend.user_course_ratings WHERE course_id = $1", [course.id]);
            tempCourse.overallRate = (ratesQuery.rows[0].r1 + ratesQuery.rows[0].r2 + ratesQuery.rows[0].r3 + ratesQuery.rows[0].r4)/4;

            ratesQuery = await pool.query("SELECT (course_relevance_rating + understandability_rating + ease_of_scoring_rating + faculty_rating )/4 as rateByUser FROM backend.user_course_ratings WHERE course_id = $1", [course.id]);
            let ones = 0;
            let twos = 0;
            let threes = 0;
            let fours = 0;
            let fives = 0;
            for (let rate of ratesQuery.rows) {
                if(rate.ratebyuser<1.5){
                    ones++;
                }
                else if(rate.ratebyuser<2.5){
                    twos++;
                }
                else if(rate.ratebyuser<3.5){
                    threes++;
                }
                else if(rate.ratebyuser<4.5){
                    fours++;
                }
                else{
                    fives++;
                }
            }
            tempCourse.ratings = {ones,twos,threes,fours,fives}
            courses.push(tempCourse);
        }

        console.log(response.rows)
        result.courses = courses;
        res.status(200).json(result);
    }
    catch (err){
        console.log(err);
        res.status(500).send(err.message);
    }
}
async function getReviewsOfCourse(req,res) {
    //course_id, page, limit then do it
    let course_id = req.params.id
    let {page,limit} = req.body
    if(!course_id){
        return res.status(400).json({err:"Incomplete parameters"})
    }
    try{
        let result = {}
        const maxLimit = 10;
        if (isNaN(limit) || limit > maxLimit) limit = maxLimit;
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;
        let results = await pool.query("SELECT COUNT(*) FROM backend.reviews WHERE course_id = $1", [course_id]);
        const count = results.rows[0].count;
        if (page > 1) {
            result.previous = {
                page: page - 1,
                limit: limit,
            }
        }
        if (endIndex < count) {
            result.next = {
                page: page + 1,
                limit: limit,
            }
        }
        const response = await pool.query("SELECT firstname,lastname,username,profile_photo,description,date FROM backend.reviews INNER JOIN backend.users ON reviews.user_id = users.id WHERE course_id = $1 ORDER BY date DESC OFFSET $2 LIMIT $3", [course_id, startIndex, limit]);
        result = response.rows;
        res.status(200).json(result);
    }
    catch (err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

async function getCourseById(req,res){
    const course_id = req.params.id
    const {user_id} = req.body
    try{
        let response ={}
        //get course title,description
        // const course = await pool.query("SELECT * FROM backend.courses")
        const course = await pool.query("SELECT * FROM backend.courses WHERE id=$1",[course_id])
        if(course.rows.length===0){
            return res.status(404).json({err:"Course not found"})
        }
        console.log(course.rows)

        response.title = course.rows[0].title
        response.description = course.rows[0].description

        //get number of ratings and reviews
        const ratings = await pool.query("SELECT COUNT(*) as numofratings FROM backend.user_course_ratings WHERE course_id=$1",[course_id])
        response.numOfRatings = ratings.rows[0].numofratings
        const reviews = await pool.query("SELECT COUNT(*) as numofreviews FROM backend.reviews WHERE course_id=$1",[course_id])
        response.numOfReviews = reviews.rows[0].numofreviews

        //get average ratings
        let ratesQuery = await pool.query("SELECT AVG(course_relevance_rating) as r1, AVG(understandability_rating) as r2, AVG(ease_of_scoring_rating) as r3, AVG(faculty_rating) as r4 FROM backend.user_course_ratings WHERE course_id = $1", [course_id]);
        // response.overallRate = (ratesQuery.rows[0].r1 + ratesQuery.rows[0].r2 + ratesQuery.rows[0].r3 + ratesQuery.rows[0].r4)/4;
        //convert above line but after parsefloat for the above
        response.overallRate = (parseFloat(ratesQuery.rows[0].r1) + parseFloat(ratesQuery.rows[0].r2) + parseFloat(ratesQuery.rows[0].r3) + parseFloat(ratesQuery.rows[0].r4))/4;
        response.categoryRates = {
            courseRelevance:ratesQuery.rows[0].r1,
            understandability:ratesQuery.rows[0].r2,
            easeOfScoring:ratesQuery.rows[0].r3,
            faculty:ratesQuery.rows[0].r4
        }

        //get overall rating graph
        ratesQuery = await pool.query("SELECT (course_relevance_rating + understandability_rating + ease_of_scoring_rating + faculty_rating )/4 as rateByUser FROM backend.user_course_ratings WHERE course_id = $1", [course_id]);
        let ones = 0;
        let twos = 0;
        let threes = 0;
        let fours = 0;
        let fives = 0;
        for (let rate of ratesQuery.rows) {
            if(rate.ratebyuser<1.5){
                ones++;
            }
            else if(rate.ratebyuser<2.5){
                twos++;
            }
            else if(rate.ratebyuser<3.5){
                threes++;
            }
            else if(rate.ratebyuser<4.5){
                fours++;
            }
            else{
                fives++;
            }
        }
        response.overallRatingGraph = {ones,twos,threes,fours,fives}


        //get ratings done by user
        if(user_id){
            ratesQuery = await pool.query("SELECT course_relevance_rating ,understandability_rating, ease_of_scoring_rating ,faculty_rating FROM user_course_ratings WHERE course_id = $1 AND user_id = $2", [course_id,user_id]);
            if(ratesQuery.rows.length===0){
                response.userOverallRating = 0
                response.userCategoryRating = {course_relevance_rating:0,understandability_rating:0,ease_of_scoring_rating:0,faculty_rating:0}
            }
            else{
                response.userOverallRating = (ratesQuery.rows[0].course_relevance_rating + ratesQuery.rows[0].understandability_rating + ratesQuery.rows[0].ease_of_scoring_rating + ratesQuery.rows[0].faculty_rating)/4
                if(ratesQuery.rows.length!==0){
                    response.userCategoryRating = ratesQuery.rows[0]
                }
            }


        }
        //category wise graph
        //create the above ones,twos,threes,fours,fives structure for course_relevance_rating, understandability_rating, ease_of_scoring_rating, faculty_rating below
        ratesQuery = await pool.query("SELECT course_relevance_rating, understandability_rating, ease_of_scoring_rating, faculty_rating FROM backend.user_course_ratings WHERE course_id = $1", [course_id]);
        let categoryRatingGraph = {
            courseRelevance:{ones:0,twos:0,threes:0,fours:0,fives:0},
            understandability:{ones:0,twos:0,threes:0,fours:0,fives:0},
            easeOfScoring:{ones:0,twos:0,threes:0,fours:0,fives:0},
            faculty:{ones:0,twos:0,threes:0,fours:0,fives:0}
        }
        for (let rate of ratesQuery.rows) {
            if(rate.course_relevance_rating===1){
                categoryRatingGraph.courseRelevance.ones++;
            }
            else if(rate.course_relevance_rating===2){
                categoryRatingGraph.courseRelevance.twos++;
            }
            else if(rate.course_relevance_rating===3){
                categoryRatingGraph.courseRelevance.threes++;
            }
            else if(rate.course_relevance_rating===4){
                categoryRatingGraph.courseRelevance.fours++;
            }
            else{
                categoryRatingGraph.courseRelevance.fives++;
            }
            if(rate.understandability_rating===1){
                categoryRatingGraph.understandability.ones++;
            }
            else if(rate.understandability_rating===2){
                categoryRatingGraph.understandability.twos++;
            }
            else if(rate.understandability_rating===3){
                categoryRatingGraph.understandability.threes++;
            }
            else if(rate.understandability_rating===4){
                categoryRatingGraph.understandability.fours++;
            }
            else{
                categoryRatingGraph.understandability.fives++;
            }
            if(rate.ease_of_scoring_rating===1){
                categoryRatingGraph.easeOfScoring.ones++;
            }
            else if(rate.ease_of_scoring_rating===2){
                categoryRatingGraph.easeOfScoring.twos++;
            }
            else if(rate.ease_of_scoring_rating===3){
                categoryRatingGraph.easeOfScoring.threes++;
            }
            else if(rate.ease_of_scoring_rating===4){
                categoryRatingGraph.easeOfScoring.fours++;
            }
            else{
                categoryRatingGraph.easeOfScoring.fives++;
            }
            if(rate.faculty_rating===1){
                categoryRatingGraph.faculty.ones++;
            }
            else if(rate.faculty_rating===2){
                categoryRatingGraph.faculty.twos++;
            }
            else if(rate.faculty_rating===3){
                categoryRatingGraph.faculty.threes++;
            }
            else if(rate.faculty_rating===4){
                categoryRatingGraph.faculty.fours++;
            }
            else{
                categoryRatingGraph.faculty.fives++;
            }
        }
        response.categoryRatingGraph = categoryRatingGraph








        res.status(200).json(response)

    }
    catch (err){
        console.log(err);
        res.status(500).send(err.message);
    }

}

async function addReview(req,res){
    //get user_id,course_id, description from body
    let {user_id,course_id,description} = req.body

    if(!user_id || !course_id || !description){
        return res.status(400).json({err:"Incomplete parameters"})
    }
    try{
        const result = await pool.query("INSERT INTO backend.reviews(user_id,course_id,description,date) VALUES($1,$2,$3,$4)",[user_id,course_id,description,new Date()])
        res.status(201).json({msg:"Review added"})
    }
    catch (err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
}
async function addRating(req,res){
    let {user_id,course_id,course_relevance_rating,understandability_rating,ease_of_scoring_rating,faculty_rating} = req.body
    if(!user_id || !course_id || !course_relevance_rating || !understandability_rating || !ease_of_scoring_rating || !faculty_rating){
        return res.status(400).json({err:"Incomplete parameters"})
    }
    try{
        const exists = await pool.query("SELECT * FROM backend.user_course_ratings WHERE user_id=$1 AND course_id=$2",[user_id,course_id])
        if(exists.rows.length !==0){
            const deleteRating = await pool.query("DELETE FROM backend.user_course_ratings WHERE user_id=$1 AND course_id=$2",[user_id,course_id])
        }
        const result = await pool.query("INSERT INTO backend.user_course_ratings(user_id,course_id,course_relevance_rating,understandability_rating,ease_of_scoring_rating,faculty_rating) VALUES($1,$2,$3,$4,$5,$6)",[user_id,course_id,course_relevance_rating,understandability_rating,ease_of_scoring_rating,faculty_rating])
        res.status(201).json({msg:"Rating added"})
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
    getAllCourses,
    getCoursesForUser,
    addCourse,
    addRating,
    getCourseById,
    getReviewsOfCourse,
    addReview
}