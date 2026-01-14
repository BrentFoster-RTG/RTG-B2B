import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.scss'
import MainHero from '../../components/MainHero/MainHero';
import FeatureCards from '../../components/FeatureCards/FeatureCards';
import StatisticImg from '../../cards/StatisticImg/StatisticImg';
import CorporateCard from '../../cards/CorporateCard/CorporateCard';
import Partner from '../../cards/Partner/Partner';
import ContactsPage from '../Contacts/ContactsPage';

const Home = () => {
  return (
    <div className={styles.layout}>
      <Header/>
      <main className={styles.main}>
          <MainHero/>
          <FeatureCards/>
          <CorporateCard/>
          <div className={styles.text_descriptions}>
            <span>
              Our Customers
            </span>
            <h2>
              Who We Work With
            </h2>
            <p>
            We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster.
            </p>
          </div>
          <StatisticImg/>
          <Partner/>
          <div className={styles.text_descriptions}>
            <span>
              Reach Out
            </span>
            <h2>
              Get in Touch
            </h2>
            <p>
            We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster.
            </p>
          </div>
          <ContactsPage/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home