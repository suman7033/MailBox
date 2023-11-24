import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../SideBar/sidebarIcon'
import './home.css'
import EmailList from '../EmailList/EmailList'
import Compose from '../Compose/Compose'

const Home = () => {
  return (
    <div>
      <Header/><br/><br/><br/>
      <div className='side'>
      <Sidebar/>
      <div>
        <EmailList/>
      </div>
        <Compose/>
      </div>
    </div>
  )
}

export default Home
