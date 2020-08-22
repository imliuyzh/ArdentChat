import React from 'react';
import './ConversationArea.css';

import Message from './Message/Message';

export default function ConversationArea({ newMessage }) {
  let [messages, setMessages] = React.useState([
    {
      name: 'Full Name',
      time: '12:51 pm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Full Name',
      time: '12:51 pm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Full Name',
      time: '12:51 pm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Full Name',
      time: '12:51 pm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus in. Sed augue lacus viverra vitae. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Eu augue ut lectus arcu bibendum at varius. Ac feugiat sed lectus vestibulum mattis. Sed blandit libero volutpat sed cras ornare arcu dui. Justo donec enim diam vulputate ut. Purus sit amet luctus venenatis. Euismod lacinia at quis risus sed vulputate odio ut enim.  Risus quis varius quam quisque id diam vel quam. Nibh sit amet commodo nulla. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Praesent elementum facilisis leo vel fringilla est. Habitant morbi tristique senectus et netus. Ultricies lacus sed turpis tincidunt. Commodo sed egestas egestas fringilla phasellus. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Non arcu risus quis varius quam quisque id diam vel. Tortor posuere ac ut consequat semper. Erat velit scelerisque in dictum. Porta lorem mollis aliquam ut porttitor leo a. Faucibus scelerisque eleifend donec pretium vulputate sapien.  Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Egestas sed tempus urna et pharetra pharetra massa massa. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Odio ut sem nulla pharetra diam sit amet nisl. Penatibus et magnis dis parturient montes nascetur. Urna neque viverra justo nec ultrices dui sapien eget. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Amet consectetur adipiscing elit ut aliquam. Ullamcorper sit amet risus nullam eget felis eget nunc. Duis convallis convallis tellus id interdum velit laoreet id donec. Dignissim cras tincidunt lobortis feugiat. Lacus sed turpis tincidunt id. Lacus vel facilisis volutpat est velit. Risus feugiat in ante metus dictum. Massa massa ultricies mi quis hendrerit dolor magna eget est. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Neque sodales ut etiam sit amet nisl. A erat nam at lectus urna duis. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.'
    },
    {
      name: 'Full Name',
      time: '12:51 pm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Full Name',
      time: '12:51 pm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Full Name',
      time: '12:51 pm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus in. Sed augue lacus viverra vitae. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Eu augue ut lectus arcu bibendum at varius. Ac feugiat sed lectus vestibulum mattis. Sed blandit libero volutpat sed cras ornare arcu dui. Justo donec enim diam vulputate ut. Purus sit amet luctus venenatis. Euismod lacinia at quis risus sed vulputate odio ut enim.  Risus quis varius quam quisque id diam vel quam. Nibh sit amet commodo nulla. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Praesent elementum facilisis leo vel fringilla est. Habitant morbi tristique senectus et netus. Ultricies lacus sed turpis tincidunt. Commodo sed egestas egestas fringilla phasellus. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Non arcu risus quis varius quam quisque id diam vel. Tortor posuere ac ut consequat semper. Erat velit scelerisque in dictum. Porta lorem mollis aliquam ut porttitor leo a. Faucibus scelerisque eleifend donec pretium vulputate sapien.  Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Egestas sed tempus urna et pharetra pharetra massa massa. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Odio ut sem nulla pharetra diam sit amet nisl. Penatibus et magnis dis parturient montes nascetur. Urna neque viverra justo nec ultrices dui sapien eget. '
    }
  ]);

  return (
    <>
      <h1 id="conversation-title">Messages</h1>
      {messages.map(message => <Message content={message} />)}
    </>
  );
}