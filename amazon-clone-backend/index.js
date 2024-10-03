// //index.js 
// const express = require('express');
// const cors = require('cors');
// const mongoose = require("mongoose");
// const app = express();
// const port = 3001;

// app.use(express.json());
// app.use(cors());

// const connection_url = "mongodb+srv://yakshraiyani:yaksh1723@cluster0.usqqk7c.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(connection_url,{
//     // useNewUrlPareser: true,
//     // useUnifiedTopology: true,
// }).then(()=>
//   {
//       console.log("connected with Mongodb")
//   }).catch((err)=>{
//       console.log(err)
//   });
// app.get("/", (req, res) => res.statusCode(200).send("Hello World"));


// app.post("/product/add",(req,res) => {
//     const productDetail = req.body;

//     console.log("Product Detail >>>>", productDetail);
//     Products.create(productDetail, (err, data) => {
//         if (err) {
//           res.status(500).send(err.message);
//           console.log(err);
//         } else {
//           res.status(201).send(data);
//         }
//       });
// });

// app.listen(port, () => console.log("listening on the port",port));

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3001;

// app.use(express.json());
// app.use(cors());

// const connection_url = "mongodb+srv://yakshraiyani:yaksh1723@cluster0.usqqk7c.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(connection_url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connected with MongoDB");
// }).catch((err) => {
//     console.log(err);
// });

// const Product = require('./Products'); // Correct import

// app.get("/", (req, res) => res.status(200).send("Hello World"));
// // Add this route to your index.js file
// // app.get("/products/get", async (req, res) => {
// //     try {
// //         const products = await Product.find();
// //         res.status(200).json(products);
// //     } catch (err) {
// //         res.status(500).json({ message: err.message });
// //     }
// // });

// app.post("/product/add", async (req, res) => {
//     const productDetail = req.body;

//     console.log("Product Detail >>>>", productDetail);

//     try {
//         const data = await Product.create(productDetail);
//         res.status(201).send(data);
//     } catch (err) {
//         res.status(500).send(err.message);
//         console.log(err);
//     }
// });

// app.listen(port, () => console.log("Listening on the port", port));


// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3001;

// app.use(express.json());
// app.use(cors());

// const connection_url = "mongodb+srv://yakshraiyani:yaksh1723@cluster0.usqqk7c.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(connection_url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connected with MongoDB");
// }).catch((err) => {
//     console.log(err);
// });

// const Product = require('./Products'); // Correct import

// app.get("/", (req, res) => res.status(200).send("Hello World"));

// app.post("/product/add", async (req, res) => {
//     const productDetail = req.body;

//     console.log("Product Detail >>>>", productDetail);

//     try {
//         const data = await Product.create(productDetail);
//         res.status(201).send(data);
//     } catch (err) {
//         res.status(500).send(err.message);
//         console.log(err);
//     }
// });

// app.listen(port, () => console.log("Listening on the port", port));
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3001;

// app.use(express.json());
// app.use(cors());

// const connection_url = "mongodb+srv://yakshraiyani:yaksh1723@cluster0.usqqk7c.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(connection_url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connected with MongoDB");
// }).catch((err) => {
//     console.log(err);
// });

// const Product = require('./Products'); // Correct import

// app.get('/products/get', async (req, res) => {
//     try {
//       const products = await Product.find(); // Assuming you're using Mongoose
//       res.json(products);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

// app.post("/product/add", async (req, res) => {
//     const productDetail = req.body;

//     console.log("Product Detail >>>>", productDetail);

//     try {
//         const data = await Product.create(productDetail);
//         res.status(201).send(data);
//     } catch (err) {
//         res.status(500).send(err.message);
//         console.log(err);
//     }
// });
// // API for SIGNUP

// app.post("/auth/signup", async (req, res) => {
//   const { email, password, fullName } = req.body;

//   const encrypt_password = await bcrypt.hash(password, 10);

//   const userDetail = {
//     email: email,
//     password: encrypt_password,
//     fullName: fullName,
//   };

//   const user_exist = await Users.findOne({ email: email });

//   if (user_exist) {
//     res.send({ message: "The Email is already in use !" });
//   } else {
//     Users.create(userDetail, (err, result) => {
//       if (err) {
//         res.status(500).send({ message: err.message });
//       } else {
//         res.send({ message: "User Created Succesfully" });
//       }
//     });
//   }
// });

// // API for LOGIN

// app.post("/auth/login", async (req, res) => {
//   const { email, password } = req.body;

//   const userDetail = await Users.findOne({ email: email });

//   if (userDetail) {
//     if (await bcrypt.compare(password, userDetail.password)) {
//       res.send(userDetail);
//     } else {
//       res.send({ error: "invaild Password" });
//     }
//   } else {
//     res.send({ error: "user is not exist" });
//   }
// });

// // API for PAYMENT
// app.post("/payment/create", async (req, res) => {
//   const total = req.body.amount;
//   console.log("Payment Request recieved for this ruppess", total);

//   const payment = await stripe.paymentIntents.create({
//     amount: total * 100,
//     currency: "inr",
//   });

//   res.status(201).send({
//     clientSecret: payment.client_secret,
//   });
// });

// app.listen(port, () => console.log("Listening on the port", port));


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
const Razorpay = require('razorpay'); // Razorpay import
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Initialize Razorpay instance with your key and secret
const razorpay = new Razorpay({
    key_id: 'rzp_test_m0SpAqXk9qwO99',
    key_secret: 'vop4GT5sjDYmpKbQ2l7ApUWY',
});

const connection_url = "mongodb+srv://yakshraiyani:yaksh1723@cluster0.usqqk7c.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected with MongoDB");
}).catch((err) => {
    console.log(err);
});

const Product = require('./Products'); 
//const Users = require("../models/Users");
const Orders = require("./Orders");

// API to get all products
app.get('/products/get', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// API to add a new product
app.post("/product/add", async (req, res) => {
    const productDetail = req.body;

    console.log("Product Detail >>>>", productDetail);

    try {
        const data = await Product.create(productDetail);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err);
    }
});

// API for SIGNUP
const bcrypt = require("bcrypt");
const Users = require("./User"); // Import the user model

app.post("/auth/signup", async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    // Check if the user already exists
    const userExist = await Users.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "Email already in use!" });
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user object
    const newUser = new Users({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Return success response
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

// API for LOGIN

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await Users.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    // Compare the password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid Password" });
    }

    // Return user details if login is successful
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


// API for PAYMENT using Razorpay
app.post("/payment/create", async (req, res) => {
  const { amount, currency = 'INR' } = req.body; // Default to INR if not provided
  try {
    const options = {
      amount: amount * 100, // Razorpay works with paise, so multiply by 100
      currency: currency,
      receipt: `receipt_order_${Math.random().toString(36).substring(7)}`, // generate a random receipt ID
    };

    const order = await razorpay.orders.create(options);
    res.status(201).send({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
    });
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err);
  }
});

//API FOR ORDER PAGE
app.post("/orders/add", async (req, res) => {
  const { basket, price, email, address } = req.body;

  if (!basket || !price || !email || !address) {
    return res.status(400).send({ message: "Invalid order details" });
  }

  const orderDetail = {
    products: basket, // make sure this is an array
    price: price, // number
    address: address, // object
    email: email, // string
  };

  try {
    const newOrder = await Orders.create(orderDetail);
    console.log("Order added to database >> ", newOrder);
    res.status(201).send(newOrder);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to add order" });
  }
});

// app.post("/orders/add", (req, res) => {
//   const products = req.body.basket;
//   const price = req.body.price;
//   const email = req.body.email;
//   const address = req.body.address;

//   const orderDetail = {
//     products: products,
//     price: price,
//     address: address,
//     email: email,
//   };

//   Orders.create(orderDetail, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("order added to database >> ", result);
//     }
//   });
// });

// app.post("/orders/get", (req, res) => {
//   const email = req.body.email;

//   Orders.find((err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const userOrders = result.filter((order) => order.email === email);
//       res.send(userOrders);
//     }
//   });
// });

app.listen(port, () => console.log("Listening on port", port));
