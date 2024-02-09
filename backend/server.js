const express = require("express");
const app = express();
const pool = require("./db/pool");

const query = require("./routes/queries");
const { getAllUsers } = require("./controller/userController");
const courses = require('./routes/courses')

const project = require("./routes/projects")
const userproject = require('./routes/user/projects')
const {saveUser} =require("./controller/saveUserController");
const cors = require('cors');


app.use(express.json());
app.get('/users', getAllUsers);
app.use('/user', userproject);
app.use('/queries', query);
// app.use('/projects', project);
app.use('/courses',courses);
app.use('/projects',project)


// for saving the currently logged in user
app.post("/save_user",(req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    const rollNumber=req.body.rollNumber;
    saveUser(username,email,rollNumber,(error,savedUser)=>{
        if(error){
            res.status(500).json({error});
            return;
        }
        res.status(201).json(savedUser);
    })
});

// app.use(cors);
app.listen(2015, () => console.log("Listening on port 2015"));
