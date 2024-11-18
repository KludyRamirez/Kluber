import React, { useState } from 'react';
import { useLoginMutation } from '../../features/api/authApi';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
