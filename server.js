const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// API endpoint to handle user logins
app.post("/login", (req, res) => {
  const ip = req.ip; // Get user's IP address
  console.log(`User with IP address ${ip} logged in`);
  // Perform other actions as needed
  res.send("Login successful");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

fetch("/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "johndoe",
    password: "password123",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // "Login successful"
  })