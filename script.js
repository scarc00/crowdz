function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message === '') return;

    const messagesContainer = document.getElementById('messages');
    
    // Create sent message
    const sentMessage = document.createElement('div');
    sentMessage.className = 'message sent';
    sentMessage.textContent = message;
    messagesContainer.appendChild(sentMessage);
    
    // Clear input
    input.value = '';
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Auto-reply after 1 second
    setTimeout(() => {
        const reply = document.createElement('div');
        reply.className = 'message received';
        reply.textContent = 'Thanks for your message! 😊';
        messagesContainer.appendChild(reply);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}

// Allow Enter key to send
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
