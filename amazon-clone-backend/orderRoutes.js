const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.post("/place-order", authMiddleware, (req, res) => {
  const { products, total, shippingAddress } = req.body;
  const { email } = req.user;

  // Create new order logic
  const newOrder = {
    email,
    products,
    total,
    shippingAddress,
    date: new Date(),
  };

  // Save the order to the database
  Order.create(newOrder)
    .then((order) => res.status(200).json({ message: "Order placed successfully", order }))
    .catch((error) => res.status(500).json({ message: "Error placing order", error }));
});

module.exports = router;
