import React from 'react';
import './App.css';

import LoginPage from './Pages/LoginPage/LoginPage';
import ChatPage from './Pages/ChatPage/ChatPage';

export default function App() {
  let [user, setUser] = React.useState({ardentID: "LiuY", name: "Yizhen Liu", affiliated: []});
  return (user === null) ? <LoginPage setUser={setUser} /> : <ChatPage user={user} />;
}