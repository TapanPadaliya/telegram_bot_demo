const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Set up a route for your Telegram bot
app.post("/your-bot-endpoint", (req, res) => {
  // Handle incoming messages from Telegram
  // You can access the message content using req.body
  console.log(req.body);
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
