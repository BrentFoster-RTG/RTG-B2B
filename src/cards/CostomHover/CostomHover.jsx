import React from 'react'
import styles from './CostomHover.module.scss'
import foto1 from '../../assets/hoverCart.jpg'

const CostomHover = () => {
  return (
    <div className={styles.card}>
      <img
        src={foto1}
        className={styles.avatar}
      />
      <span className={styles.badge}>Team Building</span>

      <h4>Custom Team Building Experience</h4>
      <span className={styles.description}>How do you create a memorable team building that can impress your colleagues and managers?</span>

      <div className={styles.socials}>
      </div>
    </div>
  )
}

export default CostomHover