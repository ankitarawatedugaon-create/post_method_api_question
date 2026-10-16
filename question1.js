const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());

let orders = [
    {
        id: 101,
        item: "Laptop",
        amount: 50000
    },
    {
        id: 102,
        item: "Mobile",
        amount: 15000
    }
];

// POST api
app.post("/orders", (req, res) => {
    const newOrder = req.body;
    orders.push(newOrder);

    res.status(201).json({
        message: "Order added successfully",
        order: newOrder,
        allOrders: orders
    });
});

//server start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})