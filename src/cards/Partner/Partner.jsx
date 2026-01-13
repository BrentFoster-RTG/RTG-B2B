import React from 'react'
import styles from './Partner.module.scss'
import img1 from '../../assets/partner/image293.png'
import img2 from '../../assets/partner/image294.png'
import img3 from '../../assets/partner/image295.png'
import img4 from '../../assets/partner/image296.png'
import img5 from '../../assets/partner/image297.png'

const Partner = () => {
  return (
    <div className={styles.container}>
        <img src={img1} alt="Riot games logo" />
        <img src={img2} alt="Deu olympische akademie logo" />
        <img src={img3} alt="Hard Rock logo" />
        <img src={img4} alt="Kuehne + nagel logo" />
        <img src={img5} alt="Goethe institut logo" />
    </div>
  )
}

export default Partner