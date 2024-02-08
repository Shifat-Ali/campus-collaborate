const pool = require('../db/pool')


//get all skills of a user, id from req.body
async function getSkills(req,res){
    const {user_id} = req.body;
    if(!user_id){
        return res.status(400).send('User id not found')
    }

    try{
        const skills = []

        const result = await pool.query('SELECT tag_name FROM backend.skills INNER JOIN backend.tags ON skills.tag_id=tags.id WHERE user_id=$1',[user_id])
        // console.log(result.rows)
        result.rows.forEach(row=>{
            skills.push(row.tag_name)
        })
        res.status(200).json({id:user_id,skills:skills})
    }
    catch(e){
        res.status(500).send('Internal server error: '+ e.message)
    }
}

async function addSkill(req,res){
    const {user_id,skill} = req.body;
    if(!user_id || !skill){
        return res.status(400).send('User id or skill not found')
    }

    try{
        //check user already has tag
        const check = await pool.query('SELECT * FROM backend.skills WHERE user_id=$1 AND tag_id=(SELECT id FROM backend.tags WHERE tag_name=$2)',[user_id,skill])
        if(check.rows.length>0){
            return res.status(400).send('Skill already exists')
        }
        //check if this tag exists in tags table,then old tag, else new tag
        const tag = await pool.query('SELECT * FROM backend.tags WHERE tag_name=$1',[skill])
        if(tag.rows.length===0){
            await pool.query('INSERT INTO backend.tags(tag_name) VALUES ($1)',[skill])
        }

        const result = await pool.query('INSERT INTO backend.skills(user_id,tag_id) VALUES ($1,(SELECT id FROM backend.tags WHERE tag_name=$2)) RETURNING *',[user_id,skill])
        console.log(result.rows[0])
        res.status(200).json(result.rows[0])
    }
    catch(e){
        res.status(500).send('Internal server error: '+e.message)
    }
}

module.exports = {
    getSkills,
    addSkill
}