import React from 'react'
import DashboardSideBar from '../DashboadSideBar/SideBar'
import HeaderSideBar from '../DashboadSideBar/HeaderSideBar'
import AddRaffles from './addRaffles'
import '../ShowRaffles/admindash.css'
function AddDash() {
  return (
    <div>
      <  HeaderSideBar className="header-dash"/>
      <div className="dash-raffle">
        <div >
            <DashboardSideBar/>
        </div>
        <div className='add-raffles'>
            <AddRaffles/>
        </div>
      </div>
    </div>
  )
}

export default AddDash
