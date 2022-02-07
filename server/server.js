// const mongooseConnection = require('./mongoose,js');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 7000;

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());

//mongo DB code
const uri = process.env.MONGO_URL;
mongoose.connect(uri, { useNewUrlParser: true });

const createdConnection = mongoose.connection;

createdConnection.once('open', () => {
  console.log('Mongoose database connected');
});

const userRouter = require('./routes/user');
const carDataRouter = require('./routes/carData');

app.use('/userInfo', userRouter);
app.use('/carInfo', carDataRouter);

app.listen(port, () => {
  console.log(`This server is working on ${port}`);
});
