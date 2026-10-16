
const express = require("express");

const app = express();
const PORT = 5000;

// JSON data read karne ke liye
app.use(express.json());

// Existing movies
let movies = [
    { id: 1, name: "Inception", rating: 9 },
    { id: 2, name: "Interstellar", rating: 8 }
];

// POST API to add a new movie
app.post("/movies", (req, res) => {
    const newMovie = req.body;

    movies.push(newMovie);

    res.status(201).json({
        message: "Movie added successfully",
        movie: newMovie,
        movies: movies
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
