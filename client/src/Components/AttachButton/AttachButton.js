import React from 'react';

import AttachmentIcon from '@material-ui/icons/Attachment';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

let useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  }
}));

export default function AttachButton() {
  let classes = useStyles();
  return (
    <>
      <input className={classes.input} id="attach-button" type="file" />
      <label htmlFor="attach-button">
        <IconButton aria-label="Attach a file" component="span">
          <AttachmentIcon />
        </IconButton>
      </label>
    </>
  );
}