
import logo from "../images/logo.png"
import ticket from "../images/download.png"
import "./homepagecards.css";
import { FaTicketAlt } from "react-icons/fa"


export default function HomePageCards({ img, price, name, start, end, id, desc }) {

    const AlertButt = () => {
        if (window.confirm("Are you sure you want to buy this card ?")) {
            alert("Successfuly Purchased!");
        }
    }
    return (
        <div class="carousel-item ">
            <div class="carousel-item-inner">
                <div className="carousel-item-front">
                    <div class="header">
                        <div class="up">
                            <div class="logo">
                                <img src={logo}></img>
                            </div>
                            <div class="id">
                                <p>{id}</p>
                            </div>
                            <div class="side">
                                <span class="spanCard"><FaTicketAlt /></span>
                                <span>{price}$</span>
                            </div>
                        </div>

                        <div class="first-row">
                            <img src={`/images/${img}`}></img><div>
                            </div >

                        </div>
                    </div>
                    <div class="title"><p> {name}</p></div>
                    <div class="date">
                        <p>Start Date: {start}</p>
                        <p>End Date: {end}</p>
                    </div>



                </div>
                <div class="carousel-item-back">

                    <h1>Description:</h1>
                    <p>{desc}</p>
                </div>
            </div>
            <button onClick={AlertButt}>BUY TICKETS NOW</button>

        </div>
    )
}
