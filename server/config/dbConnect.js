const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO || "mongodb://localhost");
    console.log(
      `Connected to MongoDB at ${process.env.MONGO || "mongodb://localhost"} /${
        process.env.PORT
      } successfully`.green.bold
    );
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`.red.bold);
    process.exit(1);
  }
};

module.exports = dbConnect;
