const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Define middleware function to log IP addresses
const logIP = (req, res, next) => {
  console.log(`IP address: ${req.ip}`);
  next();
}

// Use the logIP middleware function for all routes
app.use(logIP);

// Define your routes
app.use("/", router);

app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
