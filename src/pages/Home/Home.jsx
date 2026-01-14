import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.layout}>
      <Header/>
      <main className={styles.main}>
      <Link to="/done-components">Done Components</Link>
      <br />
      <br />
      <Link to="/in-work">In work Components</Link>
      </main>
      <Footer/>
    </div>
  )
}

export default Home