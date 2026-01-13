import React from 'react'
import styles from './StatisticImg.module.scss'
import statistic from '../../assets/statistic.png'

const StatisticImg = () => {
  return (
    <div className={styles.main_container}>
        <img className={styles.img} src={statistic} alt="statistic-img" />
        <div className={styles.statistic_container}>
            <p>Statistics</p>
            <h2>Our company in numbers</h2>
            <div className={styles.statistic}>
                <div>
                    <span>10+</span>
                    <p>Years in business</p>
                </div>
                <div>
                    <span>&gt;90</span>
                    <p>Corporate clients</p>
                </div>
                <div>
                    <span>50+</span>
                    <p>Ready made experiences</p>
                </div>
                <div>
                    <span>10k+</span>
                    <p>5-star traveler reviews</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatisticImg