document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    
    // Connect to the Socket.IO server
    const socket = io();
    
    // Function to display messages
    function displayMessage(username, message, time) {
      const messageElement = document.createElement("div");
      messageElement.innerHTML = `
        <strong>${username}</strong> <span>${time}</span>
        <p>${message}</p>
      `;
      chatMessages.appendChild(messageElement);
    }
    
    // Function to send message to the server
    function sendMessage(message) {
      socket.emit("chatMessage", message);
    }
    
    // Function to display chat history
    function displayChatHistory(chatHistory) {
      chatHistory.forEach(entry => {
        displayMessage(entry.username, entry.message, entry.timestamp);
      });
    }
    
    socket.on("chatMessage", function(data) {
      displayMessage(data.username, data.message, data.timestamp);
    });
    
    socket.on("chatHistory", function(chatHistory) {
      displayChatHistory(chatHistory);
    });
    
    sendButton.addEventListener("click", function() {
      const message = messageInput.value.trim();
      if (message !== "") {
        // Assuming the username as "User" for this simple example
        sendMessage({ username: "User", message });
        messageInput.value = "";
      }
    });
  });
  