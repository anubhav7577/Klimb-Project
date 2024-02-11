const Express = require('express');
const Mongoose = require('mongoose');

const cors = require('cors');
const path = require('path');
const XLSX = require('xlsx')
require('dotenv').config();

const Excels = require('./Models/Excels.model');
const app = require('./Controller/Upload.route');


const port = process.env.PORT || 5000;
const server = Express();

const uri = process.env.ATLAS_URI;
// const mongoClient = new MongoClient(MONGO_URL);

// async function init() {
//   console.log(mongoClient.isConnected()); // false
//   await mongoClient.connect();
//   console.log(mongoClient.isConnected()); // true
// }
Mongoose.connect('mongodb+srv://anubhavkumar7577:w4WA1LhjDZX5RJlH@cluster0.pcvcz8c.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true });

server.use(cors());
server.use(Express.json());
server.use(Express.static(path.join(__dirname, "Public")));
server.use('/', app);

console.log(Mongoose.connection.readyState);

server.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});

// console.log(Mongoose.connection.readyState);

