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
  import {Link} from "react-router-dom"
export default function Footer() {
    return (

        <footer class="footer-distributed">

            <div class="footer-left">
                <div class="imgB"><a href="#"><img class="imgLogo" src={Logo}/></a>

                <h3>Raffle<span>Box</span></h3></div>

                <p class="footer-links">
                    <Link to='/' class="link-1">Home</Link>


                    <Link to='/contactus'>Contact Us</Link>
                </p>

                <p class="footer-company-name">RaffleBox © 2022</p>
            </div>

            <div class="footer-center">

                <div>
                    <i class="fa fa-map-marker"></i>
                    <p class="footer-company-about"><span>Address</span> Alberta, Canada</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p class="footer-company-about">+1 4038526885 </p>
                </div>

                <div>
                    <i class="fa fa-envelope"></i>
                    <p class="footer-company-about"><a href="mailto:basharfrancis16@gmail.com">basharfrancis16@gmail.com</a></p>
                </div>

            </div>

            <div class="footer-right">

                <p class="footer-company-about">
                    <span>About the company</span>
                    Rafflebox is a company that involve people in online gambling that makes
                    a positive change by supporting charitable organizations.

                </p>

                <div class="footer-icons">

                    <a class="linkedIn" target="_blank" href="https://www.linkedin.com/company/rafflebox-technologies/?originalSubdomain=ca"><FontAwesomeIcon icon={faLinkedin} size="2x" className="fa-icon" /></a>
                    <a class="twitter" target="_blank" href="https://twitter.com/rafflebox5050"><FontAwesomeIcon icon={faTwitter} size="2x" className="fa-icon" /></a>
                    <a class="github" target="_blank" href="https://github.com/Basharfrancis"><FontAwesomeIcon icon={faGithub} size="2x" className="fa-icon" /></a>
                    <a class="youtube" target="_blank" href="https://www.youtube.com/channel/UCzxeEK3I9BquYfd_LSet01w"><FontAwesomeIcon icon={faYoutube} size="2x" className="fa-icon" /></a>

                </div>

            </div>

        </footer>
    )
}
