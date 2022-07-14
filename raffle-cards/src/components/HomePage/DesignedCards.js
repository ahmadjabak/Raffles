import React from 'react'
import Pic from '../images/homedesign.png'
import './DesignedCards.css';
import { ImTicket } from "react-icons/im";
import { AiFillGift } from "react-icons/ai";
import { AiFillTrophy } from "react-icons/ai";

function DesignedCards() {
    return (

        <div class="flex-container">

            <div class="flex-child first">
                <span className="imageCard"><ImTicket /></span><br />
                <h3 className="h3Card">Simple raffle tickets</h3>
                <p className="pCards">Enjoy best-in-class raffle ticket options for your fundraiser. Sell online and printed tickets to customize your campaign</p>

            </div>

            <div class="flex-child second">
                <span className="imageCard"><AiFillGift /></span><br />
                <h3 className="h3Card">Flexible raffle prizes</h3>
                <p className="pCards">Enjoy best-in-class raffle ticket options for your fundraiser. Sell online and printed tickets to customize your campaign</p>

            </div>

            <div class="flex-child third">
                <span className="imageCard"><AiFillTrophy /></span><br />
                <h3 className="h3Card">Raffle drawing options</h3>
                <p className="pCards">Choose exactly when, how and where you draw your winners. Select an automated or manual raffle drawing to suit your needs</p>
            </div>
        </div>
    )
}

export default DesignedCards
