import React from "react"
import "./Header.css"
import Logo from '../images/logo.png'
import {Link} from "react-router-dom"


// with 2 word(home and contact us) if the user needs to send a message to the company, or check the available raffles at home page
export default function Header() {
    return (
        <div >
            <div>
                <nav className="navbar">
                
                   
                        <div className="imgB">
                            <a href="#"><img className="imgLogo" src={Logo} /></a>
                            <h3 className="h3Header">Raffle<span>Box</span></h3>
                    </div>


                    <ul className="nav-links">
                       
                        <input type="checkbox" id="checkbox_toggle" />
                        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                      
                        <div className="menu">
                            <li className="li"><Link to='/'>Home</Link></li>
                            <li className="li"><Link to="/contactus">Contact Us</Link></li>

                        </div>
                    </ul>
                </nav>


            </div>
        </div>
    )
}
