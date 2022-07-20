import React from 'react'
import DashboardSideBar from '../DashboadSideBar/SideBar'
import HeaderSideBar from '../DashboadSideBar/HeaderSideBar'
import ShowRaffles from './showRaffles'
import './admindash.css'
function AdminDash() {
  return (
    <div>
      <  HeaderSideBar className="header-dash" />
      <div className="dash-raffle">
        <div className='admin-dash'>
        <DashboardSideBar />
        </div>
        <div className='show-raffles'>
          <ShowRaffles />
        </div>
      </div>
    </div>
  )
}

export default AdminDash
