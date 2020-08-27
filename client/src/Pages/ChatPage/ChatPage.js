import React from 'react';
import './ChatPage.css';

import AttachButton from '../../Components/AttachButton/AttachButton';
import ConversationArea from '../../Components/ConversationArea/ConversationArea';
import ContactSection from '../../Components/ContactSection/ContactSection';
import DialogWindow from '../../Components/DialogWindow/DialogWindow';
import SendButton from '../../Components/SendButton/SendButton';
import socket from '../../Components/Socket/Socket';

export default function ChatPage({ user }) {
  let [targetUser, setTargetUser] = React.useState('');
  let [messageText, setMessageText] = React.useState('');
  let [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    socket.emit('initializeSocket', { id: user.ardentID });
    // eslint-disable-next-line
  }, []);

  return (
    <div id="chatpage-container">
      <DialogWindow
        showDialog={errorMessage !== ''}
        setShowDialog={() => setErrorMessage('')}
        title={"Message"}
        message={errorMessage}
      />

      <div id="contact-container">
        <ContactSection 
          user={user}
          setTargetContact={setTargetUser}
          setErrorMessage={setErrorMessage}
        />
      </div>

      <div id="chat-container">
        <div id="conversation-container">
          <ConversationArea
            id={user.ardentID}
            targetUser={targetUser}
          />
        </div>

        <div id="input-container">
          <div id="input-control">
            <AttachButton
              id={user.ardentID}
              name={user.name}
              targetUser={targetUser}
              setErrorMessage={setErrorMessage}
            />
            <SendButton
              id={user.ardentID}
              name={user.name}
              messageText={messageText}
              targetUser={targetUser}
              setMessageText={setMessageText}
              setErrorMessage={setErrorMessage}
            />
          </div>

          <textarea 
            id="message-area" 
            value={messageText}
            placeholder="Write your Message Here..."
            onChange={event => setMessageText(event.target.value)}
            autoFocus 
          />
        </div>
      </div>
    </div>
  );
}
