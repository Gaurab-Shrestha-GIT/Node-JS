const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongoose connection string
    const con = await mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.grugx.mongodb.net/userDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB is connected to: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
