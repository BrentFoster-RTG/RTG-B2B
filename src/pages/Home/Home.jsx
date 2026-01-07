import React from 'react'
import styles from'./Home.module.scss';
import CorporateCard from '../../cards/CorporateCard/CorporateCard';
import DMCCard from '../../cards/DMCCard/DMCCard';
import OrganizationCard from '../../cards/OrganizationCardOrganizationCard/OrganizationCard';
import ShortNoticeCard from '../../cards/ShortNoticeCard/ShortNoticeCard';
import TravelAgentsCard from '../../cards/TravelAgentsCard/TravelAgentsCard';
import ProfileCard from '../../cards/ProfileCard/ProfileCard';
import CostomHover from '../../cards/CostomHover/CostomHover';
import Inofation from '../../cards/Inofation/Inofation';
import ServiceCard from '../../cards/ServiceCard/ServiceCard';

const Home = () => {
  return (
    <div>
      <button className={styles.btn}>
        Explore Solutions
      </button>
      <br />
      <br />
      <button className={styles.about_btn}>
        About Us
      </button>
      <br />
      <br />
      <div>
        <button className={styles.more_btn}>
        Learn More       
      </button>
      </div>
      <br />
      <br />
      <CorporateCard/>
      <DMCCard/>
      <OrganizationCard/>
      <ShortNoticeCard/>
      <TravelAgentsCard/>
      <ProfileCard/>
      <CostomHover/>
      <Inofation/>
      <div className={styles.cards_con}>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
      </div>
    </div>
  )
}

export default Home