
const express = require("express");

const app = express();
const PORT = 5000;

// JSON request data read karne ke liye
app.use(express.json());

// Existing weather reports
let weather = [
    { city: "Delhi", temp: 30, condition: "Sunny" },
    { city: "Kolkata", temp: 28, condition: "Cloudy" }
];

// POST API to add a new weather report
app.post("/weather", (req, res) => {
    const newWeather = req.body;

    weather.push(newWeather);

    res.status(201).json({
        message: "Weather report added successfully",
        report: newWeather,
        weather: weather
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
