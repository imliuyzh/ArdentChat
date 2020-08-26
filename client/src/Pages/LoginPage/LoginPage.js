import React from 'react';
import { 
  Button, 
  InputAdornment, 
  TextField, 
  Typography 
} from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';

import DialogWindow from '../../Components/DialogWindow/DialogWindow';
import './LoginPage.css';

let useStyles = makeStyles(() => ({
  inputField: {
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0076be',
    },
  },
  loginButton: {
    backgroundColor: "#0076be",
    color: '#ffffff',
    '&:hover': {
      backgroundColor: "#004570"
    }
  },
  activateButton: {
    color: "#0076be",
  }
}));

export default function LoginPage({ setUser, socket }) {
  let [id, setID] = React.useState(''),
      [name, setName] = React.useState(''),
      [message, setMessage] = React.useState('');
  let classes = useStyles();

  return (
    <div id="login-form-container">
      <DialogWindow
        showDialog={message !== ''}
        setShowDialog={() => setMessage('')}
        title={"Message"}
        message={message}
      />

      <form id="login-page-form">
        <Typography variant="h2">ArdentChat</Typography>

        <div id="login-page-form-inputs">
          <TextField
            label="ArdentID"
            className={classes.inputField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FingerprintIcon />
                </InputAdornment>
              )
            }}
            onChange={event => setID(event.target.value)}
          />

          <TextField
            label="Name"
            className={classes.inputField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              )
            }}
            onChange={event => setName(event.target.value)}
          />
        </div>

        <div id="login-form-buttons">
          <Button
            variant="contained" 
            size="large" 
            className={classes.loginButton}
            onClick={() => sendLoginRequest(id, setMessage, setUser, socket)}
          >
              Login
          </Button>

          <Button 
            variant="outlined"
            size="large"
            className={classes.activateButton}
            onClick={() => sendActivationRequest(id, name, setMessage)}
          >
            Activate
          </Button>
        </div>
      </form>
    </div>
  );
}

async function sendLoginRequest(id, msgCallback, setUser, socket) {
  try {
    let res = await fetch(`http://localhost:3001/api/users/${id}`, { method: 'GET' });
    if (res.status !== 200) {
      msgCallback(`Invalid Account.`);
    } else {
      let info = await res.json();
      setUser(info);
    }
  } catch {
    msgCallback("Unknown Error Occurred: Try again Later.")
  }
}

function sendActivationRequest(id, name, msgCallback) {
  fetch(`http://localhost:3001/api/users/${id}?name=${name}`, { method: 'POST' })
    .then(res => {
        if (res.status !== 201) {
          msgCallback(`Account Not Created (${res.status} ${res.statusText}): Please Try Later.`);
        } else {
          msgCallback("Account Created: Your Account is Ready.");
        }
    })
    .catch(() => msgCallback("Unknown Error Occurred. Try again Later."));
}