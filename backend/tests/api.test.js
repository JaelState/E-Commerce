// const request = require('supertest');
// const app = require('../index');
// const mongoose = require('mongoose');
// const port = process.env.PORT || 5001; // Change to an available port


// beforeAll(async () => {
//     await mongoose.connect('mongodb+srv://:cellfirstformm@cluster0.mongodb.net/cellcluster_test', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// });

// afterAll(async () => {
//     await mongoose.connection.close();
// });

// describe('API Tests', () => {
//     it('should register a new user', async () => {
//         const res = await request(app)
//             .post('/api/users/register')
//             .send({
//                 name: 'John Doe',
//                 email: 'john@example.com',
//                 password: 'password123'
//             });
//         expect(res.statusCode).toEqual(201);
//         expect(res.body).toHaveProperty('email', 'john@example.com');
//     });

//     it('should login a user', async () => {
//         const res = await request(app)
//             .post('/api/users/login')
//             .send({
//                 email: 'john@example.com',
//                 password: 'password123'
//             });
//         expect(res.statusCode).toEqual(200);
//         expect(res.body).toHaveProperty('token');
//     });

//     it('should get all products', async () => {
//         const res = await request(app).get('/api/products');
//         expect(res.statusCode).toEqual(200);
//         expect(res.body).toBeInstanceOf(Array);
//     });

//     it('should create a new product', async () => {
//         const res = await request(app)
//             .post('/api/products')
//             .send({
//                 name: 'Sample Product',
//                 description: 'This is a sample product.',
//                 price: 100,
//                 category: 'Sample Category',
//                 stock: 10
//             });
//         expect(res.statusCode).toEqual(201);
//         expect(res.body).toHaveProperty('name', 'Sample Product');
//     });

//     // Add more tests for orders and other endpoints
// });
