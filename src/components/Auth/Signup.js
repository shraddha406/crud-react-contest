import React, { useState } from 'react';
import './Auth.css';

function Signup() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    if (name.trim() === '' || mobile.trim() === '') {
      setMessage('Please fill in all fields.');
    } else if (!/^\d{10}$/.test(mobile.trim())) {
      setMessage('Please enter a valid 10-digit mobile number.');
    } else {
      // Store mobile number in local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      storedUsers.push(mobile.trim());
      localStorage.setItem('users', JSON.stringify(storedUsers));

      setMessage('Signup successful!');

      // Clear fields after successful signup
      setName('');
      setMobile('');
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="auth-input"
      />
      <input 
        type="text" 
        placeholder="Mobile Number" 
        value={mobile} 
        onChange={(e) => setMobile(e.target.value)} 
        className="auth-input"
      />
      <button onClick={handleSignup} className="auth-button">Signup</button>
      {message && <p className="auth-message">{message}</p>}
    </div>
  );
}

export default Signup;
