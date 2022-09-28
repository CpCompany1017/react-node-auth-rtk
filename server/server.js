const express = require("express");
const colors = require("colors");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");

const PORT = process.env.PORT || 8484;

const app = express();

// Connect to MongoDB
dbConnect();


const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms".magenta)
);
app.use(express.json());


app.listen(PORT, () => {
  console.log(`~~~ Server is running on port ${PORT} ~~~`.white.bold);
});
