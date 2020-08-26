import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import socket from '../../Socket/Socket';

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
  }
}));

export default function AddContactBar({ currentUserID, setContactList, setErrorMessage}) {
  let classes = useStyles();
  let [contractInput, setContractInput] = React.useState('');
  React.useEffect(() => {
    socket.on('newConversation', info => {
      console.log(info);
      setContactList(info.affiliated);
    });
  });

  return (
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
            onClick={() => addNewContract(currentUserID, contractInput, setErrorMessage, setContactList)}
          >
            <PersonAddIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}

async function addNewContract(userID, contractID, setErrorMessage) {
  if (userID !== contractID) {
    let req = await fetch(`http://localhost:3001/api/users/${userID}?contact=${contractID}`, 
      { method: 'PUT' });

    if (req.status === 400) {
      setErrorMessage('Please Check your Input.');
    } else if (req.status === 404) {
      setErrorMessage('Invalid User.');
    } else {
      socket.emit('createConversation', {
        from: userID,
        to: contractID
      });
    }
  } else {
    setErrorMessage("Can't Add yourself to the Contract List.");
  }
}