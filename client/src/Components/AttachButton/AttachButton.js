import React from 'react';

import socket from '../Socket/Socket';

import AttachmentIcon from '@material-ui/icons/Attachment';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

let useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  }
}));

export default function AttachButton({ id, name, targetUser, setErrorMessage }) {
  let classes = useStyles();
  return (
    <>
      <input
        className={classes.input}
        id="attach-button"
        type="file"
        onChange={event => attachFile(event, id, name, targetUser, setErrorMessage)}
      />
      <label htmlFor="attach-button">
        <IconButton 
          aria-label="Attach a file"
          component="span"
        >
          <AttachmentIcon />
        </IconButton>
      </label>
    </>
  );
}

function attachFile(event, id, name, targetUser, setErrorMessage) {
  if (targetUser !== '') {
    let reader = new FileReader();
    reader.onload = function() {
      let now = new Date().toLocaleString('en-US', {
        dateStyle: 'short',
        timeStyle: 'medium',
      });
      socket.emit('sendMessage', {
          ids: [id, targetUser],
          senderName: name,
          content: reader.result,
          time: now,
          type: 'application/octet-stream'
      });
    }
    reader.readAsDataURL(event.target.files[0]);
  } else {
    setErrorMessage('Please Start a Conversation.');
  }
}