const pool = require("../db/pool");

const getUserId = (req, res) => {
    const email = req.body.email;
    // console.log(email);
    const query = "SELECT * FROM backend.users WHERE email = $1";
    const values = [email];

    pool.query(query, values, (error, result) => {
        if (error) {
            console.error("Error executing checkExistingEmail query", error);
            return;
        }
        // console.log(result.fields);
        res.status(200).send(result.rows);
    });
};

module.exports = {
    getUserId
};
