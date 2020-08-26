import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

export default function SendButton({ id, name, messageText, targetUser, setErrorMessage, socket }) {
  return (
    <>
      <IconButton
        id="send-button"
        aria-label="Send a message"
        onClick={() => sendMessage(id, name, messageText, targetUser, setErrorMessage, socket)}
      >
        <SendIcon />
      </IconButton>
    </>
  );
}

function sendMessage(id, name, messageText, targetUser, setErrorMessage, socket) {
  if (targetUser !== '') {
    socket.emit('sendMessage', {
      ids: [id, targetUser],
      senderName: name,
      content: messageText
    });
  } else {
    setErrorMessage('Please Start a Conversation.')
  }
}