
import logo from "../images/logo.png"
import ticket from "../images/download.png"
import "./homepagecards.css";


export default function HomePageCards({img,price,name,start,end}) {
    return (
        
        <div class="carousel-item ">
            <div class="carousel-item-inner">
                <div class="header">
                    <div class="up">
                        <div class="logo">
                            <img src={logo}></img>
                        </div>
                        <div class="side">
                            <img src={ticket}></img>
                            <span>{price}</span>
                        </div>
                    </div>
                    <div class="first-row">
                        <img src={img}></img><div>
                        </div >
                    </div>
                </div>
                <div class="title"><p> {name}</p></div>
                <div class="date">
                    <p>Start Date: {start}</p>
                    <p>End Date: {end}</p>
                </div>
                <button>BUY TICKETS NOW</button>
            </div>
        </div>
    )
}
