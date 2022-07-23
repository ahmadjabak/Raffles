import React from 'react'
import { useState, useEffect } from 'react';
import DashboardSideBar from '../DashboadSideBar/SideBar'
import HeaderSideBar from '../DashboadSideBar/HeaderSideBar'
import ShowRaffles from './showRaffles'
import './admindash.css'
import LoadingPage from "../LoadingPage/LoadingPage";
function AdminDash() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    // show all the raffles in the dashboard same as from the user side
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
