import React from 'react'
import styles from'./DoneComponents.module.scss';
import CorporateCard from '../../cards/CorporateCard/CorporateCard';
import DMCCard from '../../cards/DMCCard/DMCCard';
import OrganizationCard from '../../cards/OrganizationCardOrganizationCard/OrganizationCard';
import ShortNoticeCard from '../../cards/ShortNoticeCard/ShortNoticeCard';
import TravelAgentsCard from '../../cards/TravelAgentsCard/TravelAgentsCard';
import ProfileCard from '../../cards/ProfileCard/ProfileCard';
import CostomHover from '../../cards/CostomHover/CostomHover';
import Inofation from '../../cards/Inofation/Inofation';
import ServiceCard from '../../cards/ServiceCard/ServiceCard';
import CorporatedNav from '../../components/Header/CorporatedNav';
import EducatorsNav from '../../components/Header/EducatorsNav';
import TravelNav from '../../components/Header/TravelNav';
import ServiceNav from '../../components/Header/ServiceNav';
import MainHero from '../../components/MainHero/MainHero';
import SecondaryHero from '../../components/SecondaryHero/SecondaryHero';
import TravelAgentHero from '../../components/TravelAgentHero/TravelAgentHero';
import CaseHero from '../../components/CaseHero/CaseHero';
import StatisticImg from '../../cards/StatisticImg/StatisticImg';
import Partner from '../../cards/Partner/Partner'
import Processes from '../../components/Processes/Processes'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import Error404 from '../404/Error404'
import FilesPage from '../Files/FilesPage'
import ContactsPage from '../Contacts/ContactsPage'

const DoneComponents = () => {
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
      <CorporatedNav/>
      <EducatorsNav/>
      <TravelNav/>
      <ServiceNav/>
      <p>Home &gt; Corporate Clients &gt; Corporate Solutions</p>
      <br />
      <br />
      <br />
      <br />

      <MainHero/>
      <SecondaryHero/>
      <TravelAgentHero/>
      <CaseHero/>

      <StatisticImg/>
      <br />
      <br />
      <Partner/>
      <br />
      <br />
      <Processes/>
      <br />
      <br />
      <ContactInfo/>
      <br />
      <br />
      <Error404/>
      <br />
      <br />
      <FilesPage/>
      <br />
      <br />
      <ContactsPage/>
    </div>
  )
}

export default DoneComponents