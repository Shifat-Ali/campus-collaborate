const pool = require("../db/pool");

const getUser = (req, res) => {
  const id = req.body.id;
  console.log(id);
  const query = "SELECT * FROM backend.users WHERE id = $1";
  const values = [id];

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
  getUser
};
