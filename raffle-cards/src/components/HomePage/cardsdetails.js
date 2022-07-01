import HomePageCards from './HomePageCards';
import luffy from "../images/luffy.jpg"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Home from "./home.jsx"
import {useState, useEffect} from 'react';


export default function Detailedcards(props) {
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/add", {
           method:'GET',
            headers: {
                 "Content-Type": "application/json"
            }
 })
    .then(reponse=>{
      if(reponse.ok){
        return reponse.json();
      } throw reponse;
    }).then(data=>{
      setData(data)
    })
  },[])
 
  console.log(data);
  return (
    <div>
      <Header/>
      <Home/>

      <div className="detailed-cards-container">

        { 
           data.map((datas) => 
            <HomePageCards id={datas._id} price={datas.price} img={datas.image} name={datas.name} start={datas.startdate} end={datas.endate} /> 
          )
        } 
       
        
        
      </div>
      <Footer/>
    </div>
  )
}