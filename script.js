let chatbox = document.getElementById("chatbox");

function toggleChatWidget() {
    chatbox.style.display = (chatbox.style.display === "none" || chatbox.style.display === "") ? "block" : "none";
}

function sendMessage() {
    let chatInput = document.getElementById("chatInput").value;
    let chatContent = document.querySelector(".chat-content");
    chatContent.innerHTML += `<div>User: ${chatInput}</div>`; // You can replace this with your chatbot's response
    document.getElementById("chatInput").value = "";
    chatContent.scrollTop = chatContent.scrollHeight; // Scroll chat content to the bottom
}
