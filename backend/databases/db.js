const mongoose = require("mongoose");
const colors = require("colors");

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected To Mongodb database ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`MongoDB Database Error ${error}`.bgRed.white);
  }
};
module.exports = Connection;
