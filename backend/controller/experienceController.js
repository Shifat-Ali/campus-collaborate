const pool = require('../db/pool')
async function getExperiences(req,res){
    const {user_id} = req.query
    try{
        const fromDate = new Date()
        const result = await pool.query('SELECT * FROM backend.experience WHERE user_id = $1', [user_id])
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

async function addExperiences(req,res){
    //assume that user is currently authed
    //does the active users id come from auth?
    //extra query required if we can only get the auth users email.
    let {user_id,employer,title,start_date,end_date,description} = req.body;

    if(!start_date){
        start_date = new Date();
    }

    if(!user_id || !employer || !title || !description){
        return res.status(400).json({err:"All required parameters not sent"})
    }
    else{
        try{
            const result = await pool.query('INSERT INTO backend.experience(user_id, employer,title,start_date,end_date,description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [user_id, employer,title,start_date,end_date,description]);
            console.log(result.rows[0])
            res.status(200).json(result.rows[0]);
        }
        catch (err){
            res.status(500).send(err.message);
        }
    }
}
async function editExperiences(req,res){
    //extra query required if we can only get the auth users email.
    let {id,user_id,employer,title,start_date,end_date,description} = req.body;
    if(!id || !user_id){
        return res.status(400).json({err:"Missing parameters experience id / owner id"})
    }
    if(!employer || !title || !description) {
        return res.status(400).json({err:"Missing experience info"})
    }
    if(!start_date){
        start_date=new Date()
    }

    try{
        const ownerCheck = await pool.query("select id from backend.experience where id=$1 and user_id=$2",[id,user_id])
        if(ownerCheck.rows.length===0){
            return res.status(401).json({err:"Either the experience is not yours, or it does not exist"})
        }
        else{
            try{
                const result = await pool.query("update backend.experience set employer=$1,title=$2,description=$3,start_date=$4,end_date=$5 where id=$6 and user_id=$7 returning *",
                    [employer,title,description,start_date,end_date,id,user_id]);

                console.log(result.rows[0])
                res.status(200).json(result.rows[0])
            }
            catch (err){
                console.log(err.message);
                res.status(500).json({err:err.message})
            }
        }

    }
    catch (err){
        console.log(err.message);
        res.status(500).json({err:err.message})
    }
}
async function deleteExperiences(req,res){
    //extra query required if we can only get the auth users email.
    const {id,user_id} = req.body;

    if(!id || !user_id){
        return res.status(400).json({err:"Missing parameters"})
    }
    try{
        //bug:request on load when the id does not exist
        const ownerCheck = await pool.query("select id from backend.experience where id=$1 and user_id=$2",[id,user_id])
        if(ownerCheck.rows.length===0){
            return res.status(401).json({err:"Either the certificate is not yours, or it does not exist"})
        }
        else{
            try{
                const result = await pool.query("delete from backend.experience where id=$1",[id]);
                res.status(200).json({status:"deleted"});
            }
            catch (err){
                console.log(err.message)
            }
        }
    }
    catch (err){
        console.log(err.message)
    }
}

module.exports= {
    getExperiences,
    addExperiences,
    editExperiences,
    deleteExperiences
}

