import { useState } from 'react';
import axios from 'axios';

const AuthPage = ({ onAuth }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    axios
      .post(backendUrl, user)
      .then((res) => {
        onAuth({ ...res.data, secret: password });
      })
      .catch((e) => console.log(e.message));

    setPassword('');
    setUsername('');
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Speak friend...</div>

        <div className="form-subtitle">
          Set a username and a password to get started
        </div>

        <div className="auth">
          <input
            className="auth-input"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            className="auth-input"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
