import React, { useState } from 'react';
import './Auth.css';

function Login() {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // New state to track registration status

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (mobile) {
      if (storedUsers.includes(mobile.trim())) {
        setIsRegistered(true); // User is registered
      } else {
        setIsRegistered(false); // User is not registered
        setMessage('It looks like you haven\'t signed up yet. Please sign up to create an account.');
        return;
      }
    }

    if (isRegistered && otp) {
      setMessage('Login successful! Welcome back!');
    } else if (isRegistered && !otp) {
      setMessage('Please enter 4 digit OTP to complete the login.');
    } else if (!mobile) {
      setMessage('Please enter both mobile number and OTP.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Mobile Number" 
        value={mobile} 
        onChange={(e) => setMobile(e.target.value)} 
        className="auth-input"
      />
      <input 
        type="text" 
        placeholder="OTP" 
        value={otp} 
        onChange={(e) => setOtp(e.target.value)} 
        className="auth-input"
        disabled={!isRegistered} // Disable OTP field if not registered
      />
      <button onClick={handleLogin} className="auth-button">Login</button>
      {message && <p className="auth-message">{message}</p>}
    </div>
  );
}

export default Login;
