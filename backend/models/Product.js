// C:\Users\Hp\final-project\backend\models\Product.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    username: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true }
}, { timestamps: true });

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, default: 0 },
    imageUrl: { type: String, required: true },
    reviews: [ReviewSchema] // Include reviews
});

module.exports = mongoose.model('Product', ProductSchema);
