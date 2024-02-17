import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../modules/Navbar.module.scss';
import { useAuth } from './UseAuth'; 

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>
                Register
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/login" className={styles.navLink}>
                Login
              </Link>
            </li>
      </ul>
    </nav>
  );
};