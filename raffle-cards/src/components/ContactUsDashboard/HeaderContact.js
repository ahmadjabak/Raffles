import React from 'react'
import './HeaderContact.css'
import { useNavigate } from 'react-router-dom'

import { MdOutlineKeyboardBackspace } from "react-icons/md"

export default function HeaderContact() {
    const navigate = useNavigate();
    function thenav() {
        navigate('/raffles');
    }

  return (
    <div >
    <div>
        <nav className="navbarr">
                <div className="imgB">
                    <a className="backContact" href="#" onClick={thenav}>< MdOutlineKeyboardBackspace/></a>
            </div>
        </nav>


    </div>
</div>
  )
}
// /imgLogo