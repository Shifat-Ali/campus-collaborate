const express = require("express");
const app = express();
const pool = require("./db/pool")
const user = require('./routes/users')
const project = require('./routes/projects')
const {insertFakeProjects} = require('./database/dummyproject')
app.use(express.json());
app.use('/user',user);
app.use('/projects',project);
app.get("/users", async (req, res) => {
    try {
        const fromDate = new Date();
        //return all rows
        const results = await pool.query("select * from backend.users")  //select id, username, email from users
        console.table(results.rows)
        console.log(new Date())
        const toDate = new Date();
        const elapsed = toDate.getTime() - fromDate.getTime();

        //send it to the wire
        res.send({ "rows": results.rows, "elapsed": elapsed, "method": "pool" })
    }
    catch (error) {
        console.log(error.message);
        res.sendStatus(500);
    }
})

const query = require('./routes/queries')
const { getAllUsers } = require("./controller/userController");

app.use(express.json());
app.get('/users', getAllUsers);
app.use('/user', user);
app.use('/queries', query);
app.use('/projects', project);
app.get('/fakerpop',insertFakeProjects)

app.listen(2015, () => console.log("Listening on port 2015"))