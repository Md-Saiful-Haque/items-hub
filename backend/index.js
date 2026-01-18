const express = require("express");
const cors = require("cors");

const app = express();
//app.use(cors());
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://items-hub.vercel.app",
  "https://your-frontend.netlify.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
app.use(express.json());

// FAKE DATABASE
let items = [
  {
    id: "1",
    name: "Wireless Headphones",
    category: "Electronics",
    description: "High quality wireless headphones with noise cancellation.",
    price: "$199",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    reviews: [
      {
        user: "Rahim",
        rating: 5,
        comment: "Excellent sound quality and battery life."
      },
      {
        user: "Karim",
        rating: 4,
        comment: "Very comfortable, but a bit expensive."
      }
    ]
  },
  {
    id: "2",
    name: "Smart Watch",
    category: "Wearable",
    description: "Track your fitness, heart rate, and daily activities.",
    price: "$149",
    image: "https://i.pinimg.com/736x/65/06/43/6506433a1a1cadf749a58ac90a808266.jpg",
    reviews: [
      {
        user: "Ayesha",
        rating: 5,
        comment: "Perfect for daily fitness tracking."
      },
      {
        user: "Nabil",
        rating: 4,
        comment: "Good features, display could be brighter."
      }
    ]
  },
  {
    id: "3",
    name: "Laptop",
    category: "Computer",
    description: "Powerful laptop for work, study, and entertainment.",
    price: "$999",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    reviews: [
      {
        user: "Tanvir",
        rating: 5,
        comment: "Super fast and great for programming."
      },
      {
        user: "Mim",
        rating: 4,
        comment: "Performance is great but battery is average."
      }
    ]
  },
  {
    id: "4",
    name: "Bluetooth Speaker",
    category: "Audio",
    description: "Portable speaker with deep bass and clear sound.",
    price: "$89",
    image: "https://i.pinimg.com/736x/b0/05/de/b005defe4050da42b70f3a6295c205b7.jpg",
    reviews: [
      {
        user: "Hasan",
        rating: 5,
        comment: "Amazing sound for outdoor use."
      },
      {
        user: "Rafi",
        rating: 4,
        comment: "Good bass, compact size."
      }
    ]
  },
  {
    id: "5",
    name: "Gaming Mouse",
    category: "Gaming",
    description: "Ergonomic gaming mouse with customizable DPI.",
    price: "$59",
    image: "https://i.pinimg.com/1200x/7e/d3/60/7ed3600aff4d7786fee4283813542948.jpg",
    reviews: [
      {
        user: "Siam",
        rating: 5,
        comment: "Perfect for FPS gaming."
      },
      {
        user: "Ratul",
        rating: 4,
        comment: "Very responsive, comfortable grip."
      }
    ]
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    category: "Accessories",
    description: "Mechanical keyboard with RGB lighting and fast response.",
    price: "$129",
    image: "https://i.pinimg.com/736x/e8/5e/ef/e85eef47b93ed18ea6a2e38e975f3ecf.jpg",
    reviews: [
      {
        user: "Imran",
        rating: 5,
        comment: "Love the clicky keys and RGB lighting."
      },
      {
        user: "Nusrat",
        rating: 4,
        comment: "Typing experience is excellent."
      }
    ]
  }
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
