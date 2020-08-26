import React from 'react';
import './ContactSection.css';

import { v4 } from 'uuid';

import AddContactBar from './AddContactBar/AddContactBar';
import Avatar from './Avatar/Avatar';

export default function ContactSection({ user, setTargetContact, setErrorMessage }) {
  let [contactList, setContactList] = React.useState(user.affiliated);
  return (
    <>
      <div id="add-contact-section">
        <AddContactBar
          currentUserID={user.ardentID}
          setContactList={setContactList} 
          setErrorMessage={setErrorMessage}
        />
      </div>

      <div id="contact-list-container">
        {contactList.map(contact => 
          <Avatar 
            key={v4()}
            ardentID={contact.contactID}
            name={contact.contactName}
            setTargetContact={setTargetContact}
          />
        )}
      </div>
    </>
  );
}