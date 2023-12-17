import React, { useEffect } from 'react';

function ChatBot() {
  return (
    <div style={{"height":"80rem" , "width":"100rem"}}>
      {/* Your chatbot iframe */}
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/33wkyxvfzSG-WnsUYgC7M"
        width="35%"
        style={{ height: '70%', minHeight: '70px' }}
        frameBorder="0"
        title="ChatBot"
    >
    </iframe>
    </div>
  );
}

export default ChatBot;