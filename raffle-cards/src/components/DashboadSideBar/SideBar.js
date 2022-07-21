import React from "react"
import './SideBar.css'

import { useEffect, useState } from "react";

import { AiOutlineHome } from "react-icons/ai"
import { ImTicket } from "react-icons/im"
import { FaRegAddressCard } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import ShowRaffles from "../ShowRaffles/showRaffles";
import { Link } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
export default function DashboardSideBar() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

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

    // if (loading) return <LoadingPage />;

    const toreload=()=>{
        window.location.reload();
    }

    return (

        <div className='sidebar-dash'>

            <div class="containerRr">


                <ul class="mcd-menu">
                    <div>
                    <li>
                        <Link to="/raffles" class="active">
                            <i class="span1" ><AiOutlineHome /></i>
                            <strong>Raffles</strong>
                            <small>View Raffles</small>
                        </Link>
                    </li>
                    </div>
                    <div>
                    <li>
                        <Link to="/addraffles">
                            <i className="span1"><ImTicket /></i>
                            <strong onClick={toreload}>Add Raffles</strong>
                            <small>New</small>
                        </Link>
                    </li>
                    </div>
                    <div>
                    <li>
                        <Link to="/contactadmin" >
                            <i className="span1"><FaRegAddressCard /></i>
                            <strong>Contact Us</strong>
                            <small>View</small>
                            <mark className="not">{data}</mark>
                        </Link>
                    </li>
                    </div>
                    <div>
                    <li>
                        <Link to="/profile" >
                            <i className="span1"><CgProfile /></i>
                            <strong>Profile</strong>
                            <small>Edit</small>
                        </Link>
                    </li>
                    </div>
                </ul>
            </div>

        </div>
    )
}