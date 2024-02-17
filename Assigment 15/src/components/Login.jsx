import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../modules/index.module.scss'; 

export const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    usernameEmail: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

   
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      const registeredUsers = JSON.parse(storedData);
      const user = registeredUsers.find(
        (u) =>
          (u.username === loginData.usernameEmail || u.email === loginData.usernameEmail) &&
          u.password === loginData.password
      );

      if (user) {
        setError('');
        navigate('/dashboard');
      } else {
        setError('Invalid username/email or password');
      }
    } else {
      setError('No registered users found. Please register first.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>
          Username or Email:
          <input
            type="text"
            name="usernameEmail"
            value={loginData.usernameEmail}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};
