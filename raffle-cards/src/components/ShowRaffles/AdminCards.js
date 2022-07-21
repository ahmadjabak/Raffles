import logo from "../images/logo.png"

import { FaTicketAlt } from "react-icons/fa"
import "../HomePage/homepagecards.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


export default function AdminCards({ img, price, name, start, end, id,desc }) {
  const navigate = useNavigate();
  const toComponentB = () => {
    navigate('/editraffles', { state: { id: id } });
  }
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);

  const onSubmitHandler = async (e) => {

    console.log(id)
    if (window.confirm("Are you sure you want to delete this raffle?")){
    await fetch(`http://localhost:8080/raffles?id=${id}`, {
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

  }}
 
  const tokenRemove = () => {
    localStorage.removeItem('token');
    setToken(localStorage.getItem('token'))
    console.log(!token);
    if(!token) {
      navigate('/login');
    }
  }

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    setInterval(()=>{
      tokenRemove();
    }, 43200000)

  }
 
    , [])
    useEffect(()=>{
      const token=localStorage.getItem('token');
        if(!token) {
          navigate('/login');
        }
    },[])
  return (

    <div className="carousel-item ">
      <div className="carousel-item-inner">
      <div className="carousel-item-front">
        <div className="header">
          <div className="up">
            <div className="logo">
              <img src={logo}></img>
            </div>
            <div className="id"  >
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
      <form className="buttons" onSubmit={onSubmitHandler}>
          <div>
            <input type="submit" value="DELETE" />
          </div>


          <div className="edit">
            <input type="submit" value="EDIT" onClick={() => { toComponentB() }} />
          </div>
        </form>
    </div>
  )
}