import React from 'react';
import './Message.css';

export default function Message({ message }) {
  return (
    <div className="message-container">
      <h2 className="message-user">{message.senderName}</h2>
      <span className="message-time">{message.time}</span>
      <span className="message">{message.content}</span>
    </div>
  );
}