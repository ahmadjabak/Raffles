import React from 'react'
import DashboardSideBar from '../DashboadSideBar/SideBar'
import HeaderSideBar from '../DashboadSideBar/HeaderSideBar'
import Profile from './profile'
import '../ShowRaffles/admindash.css'
function ProfileDash() {
  return (
    <div>
      <  HeaderSideBar className="header-dash"/>
      <div className="dash-raffle">
        <div >
            <DashboardSideBar/>
        </div>
        <div className='show-profile'>
            <Profile/>
        </div>
      </div>
    </div>
  )
}

export default ProfileDash
