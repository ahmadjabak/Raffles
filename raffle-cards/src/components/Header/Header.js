import React from "react"
import "./Header.css"
import Logo from '../images/logo.png'
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div >
            <body>
                <nav class="navbar">
                
                   
                        <div class="imgB">
                            <a href="#"><img class="imgLogo" src={Logo} /></a>
                            <h3 className="h3Header">Raffle<span>Box</span></h3>
                    </div>


                    <ul class="nav-links">
                       
                        <input type="checkbox" id="checkbox_toggle" />
                        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                      
                        <div class="menu">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>

                        </div>
                    </ul>
                </nav>


            </body>
        </div>
    )
}
