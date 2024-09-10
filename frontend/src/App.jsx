import { useState } from 'react';

import './App.css';
import AuthPage from './components/pages/AuthPage';
import ChatsPage from './components/pages/ChatsPage';

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
