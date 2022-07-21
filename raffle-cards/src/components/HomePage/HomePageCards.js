
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
        <div className="carousel-item ">
            <div className="carousel-item-inner">
                <div className="carousel-item-front">
                    <div className="header">
                        <div className="up">
                            <div className="logo">
                                <img src={logo}></img>
                            </div>
                            <div className="id">
                                <p>{id}</p>
                            </div>
                            <div className="side">
                                <span className="spanCard"><FaTicketAlt /></span>
                                <span>{price}$</span>
                            </div>
                        </div>

                        <div className="first-row">
                            <img src={`/images/${img}`}></img><div>
                            </div >

                        </div>
                    </div>
                    <div className="title"><p> {name}</p></div>
                    <div className="date">
                        <p>Start Date: {start}</p>
                        <p>End Date: {end}</p>
                    </div>



                </div>
                <div className="carousel-item-back">

                    <h1>Description:</h1>
                    <p>{desc}</p>
                </div>
            </div>
            <button onClick={AlertButt}>BUY TICKETS NOW</button>

        </div>
    )
}
