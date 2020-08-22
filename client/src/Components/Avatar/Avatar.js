import React from 'react';
import './Avatar.css';

import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

let useStyles = makeStyles(() => ({
  accountIcon: {
    fontSize: '54px'
  }
}));

export default function Avatar({ ardentID, name }) {
  let classes = useStyles();
  return (
    <div className="avatar-container">
      <AccountCircleIcon className={classes.accountIcon}/>
      <div className="avatar-info-container">
        <span className="avatar-name">{name}</span>
        <span className="avatar-id">{ardentID}</span>
      </div>
    </div>
  );
}