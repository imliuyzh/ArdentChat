import React from 'react';
import './ChatPage.css';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AttachmentIcon from '@material-ui/icons/Attachment';
import SendIcon from '@material-ui/icons/Send';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { v4 } from 'uuid';

import Avatar from '../../Components/Avatar/Avatar';
import ConversationArea from '../../Components/ConversationArea/ConversationArea';
import DialogWindow from '../../Components/DialogWindow/DialogWindow';

let useStyles = makeStyles(() => ({
  addPerson: {
    fontFamily: 'Roboto Light, sans-serif',
    fontSize: '16px',
    color: '#ffffff',
    "&&&:before": {
      borderColor: "#ffffff",
    },
    "&&:after": {
      borderColor: "#ffffff",
    }
  },
  input: {
    display: 'none',
  }
}));

export default function ChatPage({ user }) {
  let [contactList, setContactList] = React.useState(user.affiliated);
  let [contractInput, setContractInput] = React.useState('');
  let [targetUser, setTargetUser] = React.useState('');
  let [messageText, setMessageText] = React.useState('');
  let [errorMessage, setErrorMessage] = React.useState('');
  let classes = useStyles();

  return (
    <div id="chatpage-container">
      <DialogWindow
        showDialog={errorMessage !== ''}
        setShowDialog={() => setErrorMessage('')}
        title={"Message"}
        message={errorMessage}
      />
      <div id="contact-container">
        <div id="add-contact-section">
          <Input
            className={classes.addPerson}
            size="small"
            placeholder="New Contract (ArdentID)"
            onChange={event => setContractInput(event.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton 
                  id="add-contract-button" 
                  aria-label="Add a contract"
                  className={classes.addPerson}
                  onClick={() => addNewContract(user.ardentID, contractInput, setErrorMessage, setContactList)}
                >
                  <PersonAddIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </div>

        <div id="contact-list-container">
          {contactList.map(contact => 
            <Avatar 
              key={v4()}
              ardentID={contact}
              setTargetUser={setTargetUser}
            />)}
        </div>
      </div>

      <div id="chat-container">
        <div id="conversation-container">
          <ConversationArea targetUser={targetUser} newMessage={[]}/>
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

          <textarea 
            id="message-area" 
            placeholder="Write your Message Here..."
            onChange={event => setMessageText(event.target.value)}
            autoFocus 
          />
        </div>
      </div>
    </div>
  );
}

async function addNewContract(userID, contractID, setErrorMessage, setContactList) {
  if (userID !== contractID) {
    let req = await fetch(`http://localhost:3001/api/users/${userID}?contact=${contractID}`, 
      { method: 'PUT' });

    if (req.status === 400) {
      setErrorMessage('Please Check your Input.');
    } else if (req.status === 404) {
      setErrorMessage('Invalid User.');
    } else {
      let info = await req.json();
      setContactList(info[0].affiliated);
    }
  } else {
    setErrorMessage("Can't Add yourself to the Contract List.");
  }
}