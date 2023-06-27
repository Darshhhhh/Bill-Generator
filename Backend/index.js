const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const express = require("express");
const connection = require("./config/DBConnection");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Deployeddd!");
});

app.listen(PORT, () => {
  connection();
  console.log(`Server is Running on ${PORT}!`);
});
