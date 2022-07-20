import React from 'react'
import './SideBar.css'
import Logo from '../images/logo.png'
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function HeaderSideBar() {
    const onSubmit = (e) => {
        localStorage.removeItem('token');
    }
  return (
    <div className='header_dash'>
        <div className='headers'>
            <div class="menu-button" id='desktop'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="imGG">
                <a href="#"><img class="imgLogo" src={Logo} /></a>
                <h1>RaffleBox <span class="spanH">Dashboard</span></h1></div>
            <Link to="/login"><div class="iconnn" onClick={onSubmit}> <BiLogOut /></div></Link>
        </div>
    </div>
  )
}
