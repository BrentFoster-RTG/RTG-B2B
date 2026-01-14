import React from 'react'
import styles from './Processes.module.scss'

const Processes = () => {
  return (
    <div className={styles.main_con}>
        <div>
            <span className={styles.icon_sec}>1</span>
            <div>
                <h2>Discovery</h2>
                <p>We organize a diverse variety of corporate experiences and events that align with your business goals. Our flexible custom solution building creates opportunity to tailor a travel experience to your specific requirements.</p>
            </div>
        </div>
        <div>
            <span className={styles.icon_sec}>2</span>
            <div>
                <h2>Customization</h2>
                <p>We organize a diverse variety of corporate experiences and events that align with your business goals. Our flexible custom solution building creates opportunity to tailor a travel experience to your specific requirements.</p>
            </div>
        </div>
        <div>
            <span className={styles.icon_sec}>3</span>
            <div>
                <h2>Organization</h2>
                <p>We organize a diverse variety of corporate experiences and events that align with your business goals. Our flexible custom solution building creates opportunity to tailor a travel experience to your specific requirements.</p>
            </div>
        </div>
        <div>
            <span className={styles.icon_sec}>4</span>
            <div>
                <h2>Execution</h2>
                <p>We organize a diverse variety of corporate experiences and events that align with your business goals. Our flexible custom solution building creates opportunity to tailor a travel experience to your specific requirements.</p>
            </div>
        </div>
    </div>
  )
}

export default Processes