import logo from "../images/logo.png"
import ticket from "../images/download.png"
import { FaTicketAlt } from "react-icons/fa"
import "../HomePage/homepagecards.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import AddRaffles from "../AddRaffles/addRaffles";

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

    <div class="carousel-item ">
      <div class="carousel-item-inner">
      <div className="carousel-item-front">
        <div class="header">
          <div class="up">
            <div class="logo">
              <img src={logo}></img>
            </div>
            <div class="id"  >
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
      <form class="buttons" onSubmit={onSubmitHandler}>
          <div>
            <input type="submit" value="DELETE" />
          </div>


          <div class="edit">
            <input type="submit" value="EDIT" onClick={() => { toComponentB() }} />
          </div>
        </form>
    </div>
  )
}