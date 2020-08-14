import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

export default function DialogWindow({ showDialog, setShowDialog, title, message }) {
  return (
    <Dialog
      open={showDialog}
      onClose={() => setShowDialog(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowDialog(false)} color="primary" autoFocus>OK</Button>
      </DialogActions>
    </Dialog>
  );
}