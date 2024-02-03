const express = require("express");
const app = express();
const pool = require("./db/pool")
const user = require('./routes/users');
const query = require('./routes/queries')
const { getAllUsers } = require("./controller/userController");

app.use(express.json());
app.get('/users', getAllUsers);
app.use('/user', user);
app.use('/queries', query);

app.listen(2015, () => console.log("Listening on port 2015"))