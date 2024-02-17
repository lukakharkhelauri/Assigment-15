import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../modules/index.module.scss';
import errorStyles from '../modules/ErrorModal.module.scss';

export const Register = () => {
  const navigate = useNavigate();  

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: '', email: '', password: '' };

    if (formData.username.length < 5) {
      newErrors.username = 'Username must be at least 5 characters';
      isValid = false;
    }

    if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const existingData = localStorage.getItem('registrationData');
      let users = existingData ? JSON.parse(existingData) : [];
      if (!Array.isArray(users)) {

        users = [users];
      }
  
      const newUser = { ...formData };
      users.push(newUser);
      localStorage.setItem('registrationData', JSON.stringify(users));
  
      navigate('/dashboard');
    } else {
      console.log('Form submission failed. Please check the errors.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Register</h2>


        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && (
          <div className={`${errorStyles.error} ${errorStyles.container}`}>
            {errors.username}
          </div>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <div className={`${errorStyles.error} ${errorStyles.container}`}>
            {errors.email}
          </div>
        )}


        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <div className={`${errorStyles.error} ${errorStyles.container}`}>
            {errors.password}
          </div>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};