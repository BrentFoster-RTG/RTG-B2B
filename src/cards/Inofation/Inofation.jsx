import React from 'react'
import styles from './Inofation.module.scss'
import foto2 from '../../assets/inofation.jpg'

const Inofation = () => {
  return (
    <div className={styles.card}>
      <img
        src={foto2}
        className={styles.avatar}
      />
      <span className={styles.badge}>Conference</span>

      <h4>Innovation Conference 2025</h4>
      <span>Hamburg’s most anticipated technological conference of 2025. Here is a detailed recap.</span>

      <div className={styles.socials}>
      </div>
    </div>
  )
}

export default Inofation