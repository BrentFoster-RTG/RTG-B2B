import React from 'react';
import styles from './Error404.module.scss';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.badge}>404 Error</p>
        <h2>Page not found</h2>
        <p className={styles.apolo}>Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>
        <div className={styles.buttons}>
          <button className={styles.back} onClick={() => navigate(-1)}>Go Back</button>
          <button className={styles.home} onClick={() => navigate('/')}>Home Page</button>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Error404;
