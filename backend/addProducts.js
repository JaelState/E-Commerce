// C:\Users\Hp\final-project\backend\addProducts.js
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: 'Home Jersey',
        description: 'Official home jersey for the 2024 season',
        price: 79.99,
        category: 'Apparel',
        stock: 100,
        imageUrl: 'https://res.cloudinary.com/dv83gxauq/image/upload/v1722222606/UoqvrLYPULl7Cns_vaz32u.jpg'
    },
    {
        name: 'Away Jersey',
        description: 'Official away jersey for the 2024 season',
        price: 79.99,
        category: 'Apparel',
        stock: 100,
        imageUrl: 'https://res.cloudinary.com/dv83gxauq/image/upload/v1722223647/Real_20Madrid_2024-25_20Away_20Kit_20Leaked_20_20_282_29_qc3jzz.jpg'
    },
    {
        name: 'Training Kit',
        description: 'Official training kit for the team',
        price: 49.99,
        category: 'Apparel',
        stock: 50,
        imageUrl: 'https://res.cloudinary.com/dv83gxauq/image/upload/v1722223718/real-madrid-24-25-training-kit_20_285_29_x7vhsp.jpg'
    },
    {
        name: 'Team Scarf',
        description: 'Support your team with this scarf',
        price: 19.99,
        category: 'Accessories',
        stock: 200,
        imageUrl: 'https://res.cloudinary.com/dv83gxauq/image/upload/v1722223773/s-l400_bwclft.jpg'
    },
    {
        name: 'Club Hat',
        description: 'Official club hat',
        price: 24.99,
        category: 'Accessories',
        stock: 150,
        imageUrl: 'https://res.cloudinary.com/dv83gxauq/image/upload/v1722223826/IY0450_mb22d4.jpg'
    }
];

const addProducts = async () => {
    try {
        await mongoose.connect('mongodb+srv://cellfirstformm:cellfirstformm@cellcluster.5iot12f.mongodb.net/cellcluster?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        await Product.insertMany(products);
        console.log('Products added successfully');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error adding products:', err);
    }
};

addProducts();
