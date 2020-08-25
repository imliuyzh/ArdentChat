import React from 'react';
import './Avatar.css';

import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

let useStyles = makeStyles(() => ({
  accountIcon: {
    fontSize: '54px'
  }
}));

export default function Avatar({ ardentID, setTargetUser }) {
  let [name, setName] = React.useState('');
  let classes = useStyles();
  getContactName(ardentID, setName);

  return (
    <div className="avatar-container" onClick={() => setTargetUser(ardentID)}>
      <AccountCircleIcon className={classes.accountIcon}/>
      <div className="avatar-info-container">
        <span className="avatar-name">{name}</span>
        <span className="avatar-id">{ardentID}</span>
      </div>
    </div>
  );
}

async function getContactName(contact, setName) {
  let req = await fetch(`http://localhost:3001/api/users/${contact}`, { method: 'GET' }),
      info = await req.json();
  setName(info.name);
}