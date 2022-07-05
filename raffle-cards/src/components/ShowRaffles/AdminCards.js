import logo from "../images/logo.png"
import ticket from "../images/download.png"
import "../HomePage/homepagecards.css";

import { useState, useEffect } from 'react';

export default function AdminCards({img,price,name,start,end,id}) {
    const [data, setData] = useState([]);
    
 
    const onSubmitHandler = async (e) => {
        
        console.log(id)
        await fetch(`http://localhost:8080/add?id=${id}`, {
          method: 'DELETE',
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
          })
      }
    return (
        
        <div class="carousel-item ">
            <div class="carousel-item-inner">
                <div class="header">
                    <div class="up">
                        <div class="logo">
                            <img src={logo}></img>
                        </div>
                        <div class="id"  >
                            <p>{id}</p>
                        </div>
                        <div class="side">
                            <img src={ticket}></img>
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
                <form class="buttons" onSubmit={onSubmitHandler}>
                    <div>
                <input type="submit" value="DELETE"/>
                </div>
                <div>
                <input type="submit" value="EDIT"/>
                </div>
                </form>
            </div>
           
        </div>
    )
}