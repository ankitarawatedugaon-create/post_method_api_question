
const express = require("express");

const app = express();
const PORT = 5000;

// JSON data read karne ke liye middleware
app.use(express.json());

// Existing products
let products = [
    { id: 11, name: "Mouse", price: 800 },
    { id: 12, name: "Keyboard", price: 1200 }
];

// POST API: Add a new product
app.post("/products", (req, res) => {
    const newProduct = req.body;

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct,
        products: products
    });
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
