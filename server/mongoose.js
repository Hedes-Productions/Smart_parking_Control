function mongooseConnection() {
  const mongoose = require('mongoose');
  require('dotenv').config();

  const uri = process.env.MONGO_URL;
  mongoose.connect(uri, { useNewUrlParser: true });
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log('Mongoose database connected');
  });
}

export default mongooseConnection;
