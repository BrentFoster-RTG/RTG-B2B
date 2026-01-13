import React from 'react'
import styles from './InWorkComponents.module.scss'
import StatisticImg from '../../cards/StatisticImg/StatisticImg'
import Partner from '../../cards/Partner/Partner'
import Processes from '../../components/Processes/Processes'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import Error404 from '../404/Error404'
import FilesPage from '../Files/FilesPage'
import ContactsPage from '../Contacts/ContactsPage'

const InWorkComponents = () => {
  return (
    <div className={styles.con}>
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

export default InWorkComponents