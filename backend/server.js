const express = require("express");
const app = express();
const pool = require("./db/pool")
const user = require('./routes/users')
const project = require('./routes/projects')
const query = require('./routes/queries')
const { getAllUsers } = require("./controller/userController");
const courses = require('./routes/courses')

app.use(express.json());
app.get('/users', getAllUsers);
app.use('/user', user);
app.use('/queries', query);
app.use('/projects', project);
app.use('/courses',courses);


app.listen(2015, () => console.log("Listening on port 2015"))