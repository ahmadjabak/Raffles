import AdminCards from './AdminCards';
import { useState, useEffect } from 'react';
import "./show.scss";
import DashboardSideBar from '../DashboadSideBar/SideBar';
import AddRaffles from "../AddRaffles/addRaffles";
import HeaderSideBar from '../DashboadSideBar/HeaderSideBar';
export default function ShowRaffles(props) {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [name, setName] = useState('');
  
  useEffect(() => {
    fetch("http://localhost:8080/raffles", {
      method: 'GET',
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
      

  }, [])

  const onSubmitHandler = async (e, name) => {
    console.log(name)
    e.preventDefault();
    // props.getData(e.target.data.name.value)
    await fetch(`http://localhost:8080/search?name=${name}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(reponse => {
        if (reponse.ok) {
          return reponse.json();
        } throw reponse;
      }).then(data1 => {
        setData1(data1)
      })
  }
  return (
    <div>
    
      <form class="search" action="" onSubmit={onSubmitHandler}>
        <input type="search" placeholder="Search here..." onChange={(e) => onSubmitHandler(e, e.target.value)}/>
      </form>
      
      {(data1.length > 0) ?
      
        <div className="detailed-cards-container">
           
          {
            data1.map((datas) =>
              <AdminCards id={datas._id} desc={datas.desc} price={datas.price} img={datas.image} name={datas.name} start={datas.startdate} end={datas.endate} />
             
             
            )
            
          }
         
        </div> :
        <div className="detailed-cards-container">

          {
            data.map((datas) =>
              <AdminCards id={datas._id} desc={datas.desc} price={datas.price} img={datas.image} name={datas.name} start={datas.startdate} end={datas.endate} />,
            
            )
          }
          
        </div>
      }


    </div>
  )
}