const express = require("express");
const cors = require("cors");
const { getCompliment, getFortune } = require('./controller/fortuneController.js')
const { getStudent, addStudent, updateStudent, deleteStudent, getStudents } = require('./controller/studentcontroller')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

// app.get("/api/student", getStudents);
// app.post("/api/student", addStudent);
// app.put("/api/student", updateStudent);
// app.delete("/api/student", deleteStudent)

app.listen(4000, () => console.log("Server running on 4000"));
