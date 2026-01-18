const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// FAKE DATABASE
let items = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "High quality wireless headphones with noise cancellation.",
    price: "$199",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Track your fitness, heart rate, and daily activities.",
    price: "$149",
    image: "https://i.pinimg.com/736x/65/06/43/6506433a1a1cadf749a58ac90a808266.jpg",
  },
  {
    id: "3",
    name: "Laptop",
    description: "Powerful laptop for work, study, and entertainment.",
    price: "$999",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: "4",
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and clear sound.",
    price: "$89",
    image: "https://i.pinimg.com/736x/b0/05/de/b005defe4050da42b70f3a6295c205b7.jpg",
  },
  {
    id: "5",
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable DPI.",
    price: "$59",
    image: "https://i.pinimg.com/1200x/7e/d3/60/7ed3600aff4d7786fee4283813542948.jpg",
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    description: "Mechanical keyboard with RGB lighting and fast response.",
    price: "$129",
    image: "https://i.pinimg.com/736x/e8/5e/ef/e85eef47b93ed18ea6a2e38e975f3ecf.jpg",
  },
];


// GET ALL ITEMS
app.get("/items", (req, res) => {
  res.json(items);
});

// GET SINGLE ITEM
app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === req.params.id);
  res.json(item);
});

// ADD ITEM
app.post("/items", (req, res) => {
  const newItem = {
    id: Date.now().toString(),
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  };

  items.push(newItem);

  res.json({ message: "Item added successfully", item: newItem });
});

app.listen(5000, () =>
  console.log("Backend running at http://localhost:5000")
);
