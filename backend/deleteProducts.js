// C:\Users\Hp\final-project\backend\deleteProducts.js
const mongoose = require('mongoose');
const Product = require('./models/Product');

const deleteProducts = async () => {
    try {
        await mongoose.connect('mongodb+srv://cellfirstformm:cellfirstformm@cellcluster.5iot12f.mongodb.net/cellcluster?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

        // Delete all products
        const result = await Product.deleteMany({});
        console.log(`${result.deletedCount} products were deleted.`);

        mongoose.connection.close();
    } catch (err) {
        console.error('Error deleting products:', err);
    }
};

deleteProducts();
