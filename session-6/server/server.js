const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const chatHistory = [];

io.on("connection", (socket) => {
  // Send the chat history to the newly connected client
  socket.emit("chatHistory", chatHistory);

  socket.on("chatMessage", (data) => {
    // Add the message to the chat history
    chatHistory.push({
      username: data.username,
      message: data.message,
      timestamp: new Date().toLocaleString(),
    });

    // Broadcast the message to all connected clients
    io.emit("chatMessage", {
      username: data.username,
      message: data.message,
      timestamp: new Date().toLocaleString(),
    });
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
