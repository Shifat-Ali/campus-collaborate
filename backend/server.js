const express = require("express");
const app = express();
const user = require("./routes/users");
const project = require("./routes/projects");
const query = require("./routes/queries");
const comment = require("./routes/comment");
const courses = require("./routes/courses");
const userproject = require("./routes/user/projects");
const { getAllUsers } = require("./controller/userController");
const { saveUser } = require("./controller/saveUserController");
const cors = require("cors");
const pool = require("./db/pool");
app.use(cors());
app.use(express.json());
app.get("/users", getAllUsers);
app.use("/user", user);
app.use("/comments", comment);
app.use("/user", userproject);
app.use("/queries", query);
app.use("/courses", courses);
app.use("/projects", project);

// for saving the currently logged in user
app.post("/save_user", (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const rollNumber = req.body.rollNumber;
  saveUser(username, email, rollNumber, (error, savedUser) => {
    if (error) {
      res.status(500).json({ error });
      return;
    }
    res.status(201).json(savedUser);
  });
});
app.get("/tags", async (req, res) => {
  try {
    // Query to retrieve tag names
    const query = "SELECT tag_name FROM backend.tags";

    // Execute the query
    const { rows } = await pool.query(query);

    // Extract tag names from the result
    const tagNames = rows.map((row) => row.tag_name);

    // Send the tag names as JSON response
    res.json(tagNames);
    console.log(tagNames);
  } catch (error) {
    console.error("Error fetching tag names:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(2015, () => console.log("Listening on port 2015"));
