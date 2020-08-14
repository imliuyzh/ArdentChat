import React from 'react';
import './LoginPage.css';

import { Button, InputAdornment, TextField, Typography } from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import PersonIcon from '@material-ui/icons/Person';

export default function LoginPage() {
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
            required
          />

          <TextField
            label="Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              )
            }}
            required
          />
        </div>

        <div id="login-form-buttons">
          <Button
            variant="contained" 
            size="medium" 
            color="primary"
          >
              Login
          </Button>

          <Button 
            variant="outlined"
            size="medium"
            color="primary"
          >
            Activate
          </Button>
        </div>
      </form>
    </div>
  );
}