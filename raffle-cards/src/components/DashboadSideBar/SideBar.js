import React from "react"
import './SideBar.css'
import Logo from '../images/logo.png'
import { useEffect,useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai"
import { ImTicket } from "react-icons/im"
import { FaRegAddressCard } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import ShowRaffles from "../ShowRaffles/showRaffles";
import { Link } from "react-router-dom";
export default function DashboardSideBar() {
const [data,setData]=useState([])
    const onSubmit=(e)=>{
        localStorage.removeItem('token');
    }
    const fetchRaffles = async() => {
        await fetch(`http://localhost:8080/contactus/number`, {
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

          })
      }
    console.log(data)
    useEffect(()=>{
        fetchRaffles()
        console.log(data)
    },[])

    return (

        <div class="bodySideBar">
            <div class="menu-wrapper">
                <div class="sidebar-header">
                    <div class="sideBar">
                        <div><img src={Logo}></img></div>
                        <ul>
                            <li class="selected"><span class="span1"><AiOutlineHome /></span><label>Raffles</label></li>
                            <Link to="/addraffles"><li class="unSelected"><span class="span1"> <ImTicket /></span><label>Add Raffles</label></li></Link>
                           <Link to="/contactadmin"> <li class="unSelected"><span class="span1"> <FaRegAddressCard /></span><label>Contact Us:{data}</label></li></Link>
                            <Link to="/profile"> <li class="unSelected"><span class="span1"> <CgProfile /></span><label>Admin</label></li> </Link>
                        </ul> <span class="cross-icon"><i class="fas fa-times"></i></span>
                    </div>
                    
                    <div class="backdrop"></div>
                    <div class="content">
                   
                        <header>
                            <div class="menu-button" id='desktop'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="menu-button" id='mobile'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <h1>RaffleBox <span class="spanH">Dashboard</span></h1>
                            <Link to="/login"><li class="icon" onClick={onSubmit}> <BiLogOut /></li></Link>
                        </header>
                      
                        <div class="content-data">   <ShowRaffles/></div>
                        
                    </div>
                </div>
            </div>
        </div>



    )
}
