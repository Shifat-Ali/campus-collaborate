const pool = require("../db/pool")
const rollToData = require("./rollToData")

async function getAllRecommendations(req, res) {
    let {user_id,page,limit} = req.body;
    if (!user_id) {
        return res.status(400).send('User id not found')
    }
    try {
        const result = {}
        const maxLimit = 10;
        if (isNaN(limit) || limit > maxLimit) limit = maxLimit;
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;
        let results = await pool.query("SELECT COUNT(id) FROM backend.recommendation WHERE reciepient_id = $1", [user_id]);
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
        const response = await pool.query("SELECT recommendation.id,firstname,lastname,roll_number as SData,profile_photo,description FROM backend.recommendation INNER JOIN backend.users ON recommendation.recommender_id = users.id  WHERE reciepient_id = $1 ORDER BY date DESC OFFSET $2 LIMIT $3", [user_id, startIndex, limit]);
        //truncate description to 100 characters
        for (let rec of response.rows) {
            rec.description = rec.description.slice(0, 100) + '...';
            // console.log(rec.SData)
            rec.sdata = rollToData(rec.sdata)
        }
        result.recommendations = response.rows;
        res.status(200).json(result);

    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}
async function createRecommendation(req, res) {
    const {user_id,recipient_id,description} = req.body;
    if (!user_id || !recipient_id || !description) {
        return res.status(400).send('User id, recipient id or description not found')
    }
    try{
        let results = await pool.query("SELECT COUNT(id) FROM backend.projects WHERE owner_id = $1", [user_id]);
        const projectCount = results.rows[0].count;
        results = await pool.query("SELECT COUNT(id) FROM backend.recommendation WHERE reciepient_id = $1", [user_id]);
        const recommendationCount = results.rows[0].count;
        if (projectCount < 3 && recommendationCount < 3) {
            return res.status(400).send('User does not have enough projects or recommendations');
        }

        results = await pool.query("INSERT INTO backend.recommendation (recommender_id,reciepient_id,description) VALUES ($1,$2,$3)", [user_id, recipient_id, description]);

        res.status(201).send('Recommendation created');
    }catch (err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

async function getRecommendationById(req, res) {
    const recommendation_id = req.params.id;
    if (!recommendation_id) {
        return res.status(400).send('Recommendation id not found')
    }
    try {
        const response = await pool.query("SELECT firstname,lastname,roll_number as sdata,profile_photo,description FROM backend.recommendation INNER JOIN backend.users ON recommendation.recommender_id = users.id  WHERE recommendation.id = $1", [recommendation_id]);
        for (let rec of response.rows) {
            rec.sdata = rollToData(rec.sdata)
        }
        res.status(200).json(response.rows[0]);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

module.exports = {
    getAllRecommendations,
    createRecommendation,
    getRecommendationById
}