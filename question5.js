
const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

// Existing employees
let employees = [
    { id: 1, name: "Raman", dept: "HR" },
    { id: 2, name: "Ajay", dept: "IT" }
];

// POST API to add a new employee
app.post("/employees", (req, res) => {
    const newEmployee = req.body;

    employees.push(newEmployee);

    res.status(201).json({
        message: "Employee added successfully",
        employee: newEmployee,
        employees: employees
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
