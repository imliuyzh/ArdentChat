import React from 'react';
import './Message.css';

import { v4 } from 'uuid';

export default function Message({ message }) {
  return (
    <div className="message-container">
      <h2 className="message-user">{message.senderName}</h2>
      <span className="message-time">{message.time}</span>
      <span>{showMessage(message)}</span>
    </div>
  );
}

function showMessage(message) {
  return (message.type === 'text/plain') 
    ? displayText(message) : displayFile(message);
}

function displayText(message) {
  return message.content.split("\n").map(line => <p key={v4()} className="message">{line}</p>);
}

function displayFile(message) {
  return <a href={message.content} className="message">File (Right Click to Open)</a>;
}
