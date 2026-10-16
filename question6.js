
const express = require("express");

const app = express();
const PORT = 5000;

// JSON request data read karne ke liye
app.use(express.json());

// Existing books
let books = [
    { id: 201, title: "Swift Basics", author: "Apple" },
    { id: 202, title: "Node.js Mastery", author: "Ryan Dahl" }
];

// POST API to add a new book
app.post("/books", (req, res) => {
    const newBook = req.body;

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook,
        books: books
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
