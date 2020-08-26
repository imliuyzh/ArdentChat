import React from 'react';
import './ChatPage.css';

import io from 'socket.io-client';

import AttachButton from '../../Components/AttachButton/AttachButton';
import ConversationArea from '../../Components/ConversationArea/ConversationArea';
import ContactSection from '../../Components/ContactSection/ContactSection';
import DialogWindow from '../../Components/DialogWindow/DialogWindow';
import SendButton from '../../Components/SendButton/SendButton';

export default function ChatPage({ user }) {
  let [targetUser, setTargetUser] = React.useState('');
  let [messageText, setMessageText] = React.useState('');
  let [errorMessage, setErrorMessage] = React.useState('');
  let socket = React.useState(io('http://localhost:3001'))[0];

  React.useEffect(() => {
    socket.emit('initializeSocket', { id: user.ardentID });
    socket.on('error', err => console.log);
    socket.on('connect_error', err => console.log);
  });

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
            socket={socket}
          />
        </div>

        <div id="input-container">
          <div id="input-control">
            <AttachButton />
            <SendButton
              id={user.ardentID}
              name={user.name}
              messageText={messageText}
              targetUser={targetUser}
              setErrorMessage={setErrorMessage}
              socket={socket}
            />
          </div>

          <textarea 
            id="message-area" 
            placeholder="Write your Message Here..."
            onChange={event => setMessageText(event.target.value)}
            autoFocus 
          />
        </div>
      </div>
    </div>
  );
}