const express = require("express");
const app = express();
const pool = require("./db/pool")
const user = require('./routes/users')
const project = require('./routes/projects')
const query = require('./routes/queries')
const comment = require('./routes/comment')
const { getAllUsers } = require("./controller/userController");
// const cors = require("")

// app.use(cors(corsOptions));
app.use(express.json());
app.get('/users', getAllUsers);
app.use('/user', user);
app.use('/comments', comment);
app.use('/queries', query);
app.use('/projects', project);


app.listen(2015, () => console.log("Listening on port 2015"))