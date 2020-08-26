import React from 'react';
import './Message.css';

export default function Message({ message }) {
  return (
    <div className="message-container">
      <h2 className="message-user">{message.senderName}</h2>
      <span className="message-time">{message.time}</span>
      <span className="message">{displayNewLine(message.content)}</span>
    </div>
  );
}

function displayNewLine(content) {
  return content.split("\n").map(line => <p>{line}</p>);
}