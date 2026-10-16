
const express = require("express");

const app = express();
const PORT = 5000;

// JSON request data read karne ke liye
app.use(express.json());

// Existing courses
let courses = [
    { id: 101, course: "Web Development", duration: "3 Months" },
    { id: 102, course: "App Development", duration: "4 Months" }
];

// POST API to add a new course
app.post("/courses", (req, res) => {
    const newCourse = req.body;

    courses.push(newCourse);

    res.status(201).json({
        message: "Course added successfully",
        course: newCourse,
        courses: courses
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
