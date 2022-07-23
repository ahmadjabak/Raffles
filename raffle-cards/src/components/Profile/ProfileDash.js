import React from 'react'
import DashboardSideBar from '../DashboadSideBar/SideBar'
import HeaderSideBar from '../DashboadSideBar/HeaderSideBar'
import Profile from './profile'
import LoadingPage from "../LoadingPage/LoadingPage";
import { useState, useEffect } from 'react';
import '../ShowRaffles/admindash.css'

function ProfileDash() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8080/api/raffles", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(reponse => {
        if (reponse.ok) {
          return reponse.json();
        } throw reponse;
      }).then(data => {
        setData(data)
        setLoading(false);
      })
  }, [])
  if (loading) return <LoadingPage />;
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
