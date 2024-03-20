
  document.addEventListener('DOMContentLoaded', function() {
    var chatBot = document.getElementById('chat-bot');
    var chatBox = document.getElementById('chat-box');
    var chatBotImg = document.getElementById('chat-bot-img');
    var closeButton = document.getElementById('close-btn');
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');
    var chatMessages = document.getElementById('chat-messages');
  
    chatBotImg.addEventListener('click', function() {
      chatBox.style.display = (chatBox.style.display === 'none' || chatBox.style.display === '') ? 'block' : 'none';
    });
  
    closeButton.addEventListener('click', function() {
      chatBox.style.display = 'none';
    });
  
    sendButton.addEventListener('click', function() {
      var message = messageInput.value.trim();
      if (message !== '') {
        addMessage('You', message);
        setTimeout(function() {
          botReply();
        }, 1000); // Simulating bot response delay
        messageInput.value = '';
      }
    });
  
    function botReply() {
      var replies = ['Hello!', 'How can I assist you?', 'Nice to meet you!'];
      var reply = replies[Math.floor(Math.random() * replies.length)];
      addMessage('Chat Bot', reply);
    }
  
    function addMessage(sender, message) {
      var messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.innerHTML = '<strong>' + sender + ':</strong> ' + message;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
    }
  });
  