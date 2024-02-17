import React, { useState, useEffect } from 'react';
import { useAuth } from './UseAuth'; 
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const { logout } = useAuth(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      {userData ? (
        <div>
          <p>User ID: {userData.id}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};





