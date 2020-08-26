import React from 'react';
import './ConversationArea.css';

import { v4 } from 'uuid';

import Message from './Message/Message';
import socket from '../Socket/Socket';

export default function ConversationArea({ id, targetUser }) {
  let [messages, setMessages] = React.useState([]);
  
  React.useEffect(() => {
    socket.on('receiveMessage', info => setMessages([...messages, info]));
  });

  if (targetUser !== '') {
    return (
      <>
        <h1 id="conversation-title">Messages</h1>
        {messages.filter(message => message.ids.includes(id) && message.ids.includes(targetUser)).map(message => <Message key={v4()} message={message} />)}
      </>
    );
  } else {
    return (
      <></>
    );
  }
}