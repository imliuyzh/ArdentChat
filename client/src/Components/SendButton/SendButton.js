import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import socket from '../Socket/Socket';

export default function SendButton({ id, name, messageText, targetUser, setErrorMessage }) {
  return (
    <>
      <IconButton
        id="send-button"
        aria-label="Send a message"
        onClick={() => sendMessage(id, name, messageText, targetUser, setErrorMessage)}
      >
        <SendIcon />
      </IconButton>
    </>
  );
}

function sendMessage(id, name, messageText, targetUser, setErrorMessage) {
  if (targetUser !== '' && messageText !== '') {
    let now = new Date().toLocaleString('en-US', {
      dateStyle: 'short',
      timeStyle: 'medium',
    });

    socket.emit('sendMessage', {
      ids: [id, targetUser],
      senderName: name,
      content: messageText,
      time: now,
      type: 'text/plain'
    });
  } else {
    setErrorMessage('Please Start a Conversation.');
  }
}