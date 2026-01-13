import React from 'react';
import styles from './ContactInfo.module.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import { yellow } from '@mui/material/colors';

const ContactInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftCard}>
        <div className={styles.header}>
          <LightModeIcon sx={{ color: yellow[700], fontSize: 24 }} />
          <h3>Work Hours</h3>
        </div>
        <p className={styles.caption}>
          Our team is happy to get a call from you within our operating hours.
        </p>
        <div className={styles.hours}>
          <div><span className={styles.days}>Monday</span><span className={styles.time}>9:00 - 18:00</span></div>
          <div><span className={styles.days}>Tuesday</span><span className={styles.time}>9:00 - 18:00</span></div>
          <div><span className={styles.days}>Wednesday</span><span className={styles.time}>9:00 - 18:00</span></div>
          <div><span className={styles.days}>Thursday</span><span className={styles.time}>9:00 - 18:00</span></div>
          <div><span className={styles.days}>Friday</span><span className={styles.time}>9:00 - 18:00</span></div>
          <div><span className={styles.days}>Saturday</span><span className={styles.time}>Day Off</span></div>
          <div><span className={styles.days}>Sunday</span><span className={styles.time}>Day Off</span></div>
        </div>
      </div>

      <div className={styles.rightCard}>
        <div className={styles.header}>
          <h3>General Contacts</h3>
        </div>
        <p>
          Feel free to reach out using the following contacts for general questions.
        </p>
        <div className={styles.grid}>
          <div>
            <span className={styles.label}>General Questions</span>
            <a href="mailto:hi@robin.de">hi@robin.de</a>
          </div>
          <div>
            <span className={styles.label}>Suppliers</span>
            <a href="mailto:supp@robin.de">supp@robin.de</a>
          </div>
          <div>
            <span className={styles.label}>Marketing</span>
            <a href="mailto:marketing@robin.de">marketing@robin.de</a>
          </div>
          <div>
            <span className={styles.label}>Feedback</span>
            <a href="mailto:feedback@robin.de">feedback@robin.de</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
