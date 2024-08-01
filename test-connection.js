require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected...');
    mongoose.connection.close(); // Close the connection after test
})
.catch(err => {
    console.log('MongoDB connection error:', err);
});
