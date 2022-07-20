import React from 'react'
import DashboardSideBar from '../DashboadSideBar/SideBar'
import HeaderSideBar from '../DashboadSideBar/HeaderSideBar'
import ContactUsDesign from './ContactUsDesign'
import "../ShowRaffles/admindash.css"
function ContactDash() {
  return (
    <div>
      <  HeaderSideBar className="header-dash"/>
      <div className="dash-raffle">
        <div >
            <DashboardSideBar/>
        </div>
        <div className='show-contacts'>
            <ContactUsDesign/>
        </div>
      </div>
    </div>
  )
}

export default ContactDash
