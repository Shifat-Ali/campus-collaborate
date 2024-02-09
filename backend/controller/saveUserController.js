const pool = require("../db/pool");



const checkExistingEmail = (email, callback) => {
  const query = "SELECT * FROM backend.users WHERE email = $1";
  const values = [email];

  pool.query(query, values, (error, result) => {
    if (error) {
      console.error("Error executing checkExistingEmail query", error);
      callback("Internal Server Error", null);
      return;
    }

    const existingUser = result.rows[0];
    callback(null, existingUser);
  });
};


const saveUser = (username, email, rollNumber,callback) => {
  console.log(username);
  if(!username || !email || !rollNumber)
  {
    return ;
  }
  // Check if email already exists
  checkExistingEmail(email, (emailError, existingUser) => {
    if (emailError) {
      callback(emailError, null);
      return;
    }

    if (existingUser) {
      callback("Email already exists", null);
      return;
    }
    // if email doesn't exist save, user in the backend.
    const insertQuery = `
    INSERT INTO backend.users (username,email,contact_no,about,roll_number)
    VALUES ($1, $2, $3, $4,$5);
  `;
    const insertValues = [
      username,
      email,
      "1234567890",
      "Hello!",
      rollNumber
    ];
    console.log(insertValues);

    pool.query(insertQuery, insertValues, (insertError, insertResult) => {
      if (insertError) {
        console.error("Error executing query", insertError);
        callback("Internal Server Error", null);
        return;
      }

      console.log(insertResult);
      const savedUser = insertResult.rows[0];
      callback(null, savedUser);
    });
  });
};


module.exports = {
  saveUser,
};
