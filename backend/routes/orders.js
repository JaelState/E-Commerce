const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth'); // Middleware for authentication

// Get all orders (Admin)
router.get('/', auth, async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('products.product');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new order
router.post('/', auth, async (req, res) => {
    const { products, total } = req.body;
    try {
        const order = new Order({ user: req.user.id, products, total });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
