import React from "react"
import './SideBar.css'

import { useEffect, useState } from "react";

import { AiOutlineHome } from "react-icons/ai"
import { ImTicket } from "react-icons/im"
import { FaRegAddressCard } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { Link, NavLink } from "react-router-dom";

import LoadingPage from "../LoadingPage/LoadingPage";
export default function DashboardSideBar() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    // raffles will be fetched at dashboard for the admin to check the available raffles

    const fetchRaffles = async () => {
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
                setLoading(false);
            })
    }
    console.log(data)
    useEffect(() => {
        fetchRaffles()
        console.log(data)
    }, [])
    return (

        <div className='sidebar-dash'>

            <div className="containerRr">


                <ul className="mcd-menu">
                    <div>
                    <li>
                            <NavLink to="/raffles" className={({isActive})=>(isActive ? "active" : "")} >
                            <i className="span1" ><AiOutlineHome /></i>
                            <strong>Raffles</strong>
                            <small>View Raffles</small>
                            </NavLink>
                    </li>
                    </div>
                    <div>
                    <li>
                        <NavLink to="/addraffles" className={({isActive})=>(isActive ? "active" : "")} >
                            <i className="span1"><ImTicket /></i>
                            <strong>Add Raffles</strong>
                            <small>New</small>
                        </NavLink>
                    </li>
                    </div>
                    <div>
                    <li>
                        <NavLink to="/contactadmin" className={({isActive})=>(isActive ? "active" : "")} >
                            <i className="span1"><FaRegAddressCard /></i>
                            <strong>Contact Us</strong>
                            <small>View</small>
                            <mark className="not">{data}</mark>
                        </NavLink>
                    </li>
                    </div>
                    <div>
                    <li>
                        <NavLink to="/profile" className={({isActive})=>(isActive ? "active" : "")} >
                            <i className="span1"><CgProfile /></i>
                            <strong>Profile</strong>
                            <small>Edit</small>
                        </NavLink>
                    </li>
                    </div>
                </ul>
            </div>

        </div>
    )
}
