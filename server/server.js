// const mongooseConnection = require('./mongoose,js');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//mongo DB code
const uri = process.env.MONGO_URL;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true });

const createdConnection = mongoose.connection;

createdConnection.once('open', () => {
  console.log('Mongoose database connected');
});

app.listen(port, () => {
  console.log(`This server is working on ${port}`);
});
