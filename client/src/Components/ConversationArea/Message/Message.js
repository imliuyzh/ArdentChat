import React from 'react';
import './Message.css';

export default function Message({ content }) {
  return (
    <div className="message-container">
      <h2 className="message-user">{content.name}</h2>
      <span className="message-time">{content.time}</span>
      <span className="message">{content.message}</span>
    </div>
  );
}