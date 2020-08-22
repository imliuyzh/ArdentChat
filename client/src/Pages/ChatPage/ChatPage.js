import React from 'react';
import './ChatPage.css';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AttachmentIcon from '@material-ui/icons/Attachment';
import SendIcon from '@material-ui/icons/Send';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import Avatar from '../../Components/Avatar/Avatar';

let useStyles = makeStyles(() => ({
  addPerson: {
    color: '#ffffff',
    fontFamily: 'Roboto Light, sans-serif',
    "&&&:before": {
      borderColor: "#ffffff"
    },
    "&&:after": {
      borderColor: "#ffffff"
    }
  },
  input: {
    display: 'none',
  }
}));

export default function ChatPage({ user }) {
  let [targetUser, setTargetUser] = React.useState(null);
  let classes = useStyles();
  return (
    <div id="chatpage-container">
      <div id="contact-container">
        <div id="add-contact-section">
          <Input
            className={classes.addPerson}
            size="small"
            placeholder="New Contract (ArdentID)" 
            startAdornment={
              <InputAdornment position="start">
                <PersonAddIcon />
              </InputAdornment>
            }
          />
        </div>

        <div id="contact-list-container">
          <Avatar ardentID="ID1" name="NAME1" />
          <Avatar ardentID="ID2" name="NAME2" />
          <Avatar ardentID="ID3" name="NAME3" />
          <Avatar ardentID="ID4" name="NAME4" />
          <Avatar ardentID="ID5" name="NAME5" />
          <Avatar ardentID="ID6" name="NAME6" />
          <Avatar ardentID="ID7" name="NAME7" />
          <Avatar ardentID="ID8" name="NAME8" />
          {/*{user.affiliated.map(contact => displayContact(contact))}*/}
        </div>
      </div>

      <div id="chat-container">
        <div id="conversation-container">
        </div>

        <div id="input-container">
          <div id="input-control">
            <input className={classes.input} id="attach-button" type="file" />
            <label htmlFor="attach-button">
              <IconButton aria-label="Attach a file" component="span">
                <AttachmentIcon />
              </IconButton>
            </label>

            <IconButton id="send-button" aria-label="Send a message">
              <SendIcon />
            </IconButton>
          </div>

          <textarea id="message-area" autofocus />
        </div>
      </div>
    </div>
  );
}

function displayContact(contact) {
  fetch(`http://localhost:3001/api/users/${contact.ardentID}`, { method: 'GET' })
    .then(res => res.json())
    .then(info => <Avatar ardentID={info.ardentID} name={info.name} />);
}