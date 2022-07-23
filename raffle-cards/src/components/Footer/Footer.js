import React from "react"
import "./Footer.css"
import Logo from '../images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faTwitter,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"
  

// footer includes all information with icons of linkedIn, twitter, github, youtube for the company
export default function Footer() {
    return (

        <footer className="footer-distributed">

            <div className="footer-left">
                <div className="imgBB"><a href="#"><img className="imgLogo" src={Logo}/></a>

                <h3>Raffle<span>Box</span></h3></div>

                <p className="footer-links">
                    <Link to='/' className="link-1">Home</Link>


                    <Link to='/contactus'>Contact Us</Link>
                </p>

                <p className="footer-company-name">RaffleBox © 2022</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p className="footer-company-about"><span>Address</span> Alberta, Canada</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p className="footer-company-about">+1 4038526885 </p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p className="footer-company-about"><a href="mailto:basharfrancis16@gmail.com">basharfrancis16@gmail.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About the company</span>
                    Rafflebox is a company that involve people in online gambling that makes
                    a positive change by supporting charitable organizations.

                </p>

                <div className="footer-icons">

                    <a className="linkedIn" target="_blank" href="https://www.linkedin.com/company/rafflebox-technologies/?originalSubdomain=ca"><FontAwesomeIcon icon={faLinkedin} size="2x" className="fa-icon" /></a>
                    <a className="twitter" target="_blank" href="https://twitter.com/rafflebox5050"><FontAwesomeIcon icon={faTwitter} size="2x" className="fa-icon" /></a>
                    <a className="github" target="_blank" href="https://github.com/Basharfrancis"><FontAwesomeIcon icon={faGithub} size="2x" className="fa-icon" /></a>
                    <a className="youtube" target="_blank" href="https://www.youtube.com/channel/UCzxeEK3I9BquYfd_LSet01w"><FontAwesomeIcon icon={faYoutube} size="2x" className="fa-icon" /></a>

                </div>

            </div>

        </footer>
    )
}
