const pool = require('../db/pool')
const { json } = require("express");

async function getAllFollowers(req, res) {
    const { user_id } = req.body;
    if (!user_id) {
        return res.status(400).json({ err: "Missing parameters" })
    }
    try {
        const result = await pool.query("SELECT following_user_id,username, profile_photo FROM backend.follows INNER JOIN backend.users ON following_user_id = backend.users.id WHERE followed_user_id = $1", [user_id])
        res.status(200).json(result.rows);
    }
    catch (err) {
        console.log(err.message)
        res.status(500).json({ err: err.message })
    }
}

async function getUserFollowing(req, res) {
    const { user_id } = req.body;
    if (!user_id) {
        return res.status(400).json({ err: "Missing parameters" })
    }
    try {
        const result = await pool.query("SELECT followed_user_id,username, profile_photo FROM backend.follows INNER JOIN backend.users ON followed_user_id = backend.users.id WHERE following_user_id = $1", [user_id])
        res.status(200).json(result.rows)
    }
    catch (err) {
        console.log(err.message)
        res.status(500).json({ err: err.message })
    }
}

async function followUser(req, res) {
    //assume user is authed
    const { user_id } = req.body;
    const { id } = req.params;

    if (!user_id || !id) {
        return res.status(400).json({ err: 'Missing parameters' })
    }

    try {
        //if user already follows
        const result = await pool.query("SELECT * FROM backend.follows WHERE following_user_id=$1 AND followed_user_id=$2", [user_id, id]);
        // console.log(result.rows); []

        if (result.rows.length === 0) {
            const result = await pool.query("INSERT INTO backend.follows(following_user_id,followed_user_id) VALUES($1,$2) RETURNING *", [user_id, id])
            return res.status(200).json(result.rows)
        }
        else {
            res.status(200).json(result.rows)
        }
    }
    catch (err) {
        console.log(err.message)
        res.status(500).json({ err: err.message })
    }
}
async function unfollowUser(req, res) {
    //assume user is authed
    const { user_id } = req.body;
    const { id } = req.params;

    if (!user_id || !id) {
        return res.status(400).json({ err: 'Missing parameters' })
    }

    try {
        const result = await pool.query("DELETE FROM backend.follows WHERE following_user_id=$1 AND followed_user_id=$2", [user_id, id])
        res.status(200).send({ status: "ok" });
    }
    catch (err) {
        console.log(err.message)
        res.status(500).json({ err: err.message })
    }
}

module.exports = {
    getAllFollowers,
    getUserFollowing,
    followUser,
    unfollowUser
}