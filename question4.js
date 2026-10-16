
const express = require("express");

const app = express();
const PORT = 5000;

// JSON request ko read karne ke liye
app.use(express.json());

// Existing students
let students = [
    { roll: 101, name: "Ajay", marks: 88 },
    { roll: 102, name: "Raman", marks: 76 }
];

// POST API to add a new student
app.post("/students", (req, res) => {
    const newStudent = req.body;

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent,
        students: students
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
