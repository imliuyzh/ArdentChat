import React from 'react';
import { 
  Button, 
  InputAdornment, 
  TextField, 
  Typography 
} from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import PersonIcon from '@material-ui/icons/Person';
import './LoginPage.css';

export default function LoginPage() {
  let [id, setID] = React.useState(''),
      [name, setName] = React.useState('');

  return (
    <div id="login-page-container">
      <form id="login-page-form">
        <Typography variant="h2">ArdentChat</Typography>

        <div id="login-page-form-inputs">
          <TextField
            label="ArdentID"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FingerprintIcon />
                </InputAdornment>
              )
            }}
            onChange={event => setID(event.target.value)}
            required
          />

          <TextField
            label="Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              )
            }}
            onChange={event => setName(event.target.value)}
            required
          />
        </div>

        <div id="login-form-buttons">
          <Button
            variant="contained" 
            size="medium" 
            color="primary"
            onClick={() => sendLoginRequest(id)}
          >
              Login
          </Button>

          <Button 
            variant="outlined"
            size="medium"
            color="primary"
            onClick={() => sendActivationRequest(id, name)}
          >
            Activate
          </Button>
        </div>
      </form>
    </div>
  );
}

function sendLoginRequest(id) {
  fetch(`http://localhost:3001/api/users/${id}`, { method: 'GET' })
    .then(res => {
      if (res.status !== 200) {
        alert(`Account Does Not Exist.`);
      } else {
        alert("Welcome to ArdentChat!");
      }
    })
    .catch(() => alert("Unknown Error Occurred. Try again Later."));
}

function sendActivationRequest(id, name) {
  fetch(`http://localhost:3001/api/users/${id}?name=${name}`, { method: 'POST' })
    .then(res => {
        if (res.status !== 201) {
          alert(`Account Not Created (${res.status} ${res.statusText}). Please Try Again.`);
        } else {
          alert("Account Created. Your Account is Ready.");
        }
    })
    .catch(() => alert("Unknown Error Occurred. Try again Later."));
}