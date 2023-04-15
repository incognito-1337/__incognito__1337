const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log(`Received request from IP address ${ipAddress}`);
  res.send("Hello, World!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
