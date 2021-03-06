const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("oh no, Mongo error");
    console.log(err);
  });

const p = new Product({
  name: "Grapefruit",
  price: 1.99,
  category: "fruit",
});

// p.save()
//   .then((p) => console.log(p))
//   .catch((e) => console.log(e));

const seedProducts = [
  {
    name: "Fairy Eggpland",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Chocolate Milk",
    price: 2.69,
    category: "dairy",
  },
];

// Product.insertMany(seedProducts)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
