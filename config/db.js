//Connection file to mongo db
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://page-builder:d9Sb8uJfHWFUt42b@node-mongo-server-1.pkxfn.mongodb.net/react-page-builder?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
