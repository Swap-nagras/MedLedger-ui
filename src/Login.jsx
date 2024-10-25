import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const [isLogin, setIsLogin]=useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your authentication logic here
    // For example:
    if (username === 'user' && password === 'password') {
      // Set authentication state (e.g., using Context or Redux)
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
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
}

export default Login;