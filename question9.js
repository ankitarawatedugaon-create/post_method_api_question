
const express = require("express");

const app = express();
const PORT = 5000;

// JSON request data read karne ke liye
app.use(express.json());

// Existing cities
let cities = [
    { id: 1, name: "Delhi", population: "2 Cr" },
    { id: 2, name: "Mumbai", population: "1.8 Cr" }
];

// POST API to add a new city
app.post("/cities", (req, res) => {
    const newCity = req.body;

    cities.push(newCity);

    res.status(201).json({
        message: "City added successfully",
        city: newCity,
        cities: cities
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
