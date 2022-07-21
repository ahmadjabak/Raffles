import AdminCards from './AdminCards';
import { useState, useEffect } from 'react';
import "./show.scss";

export default function ShowRaffles(props) {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);


  // show all the raffles, where admin can edit the raffle or delete it, along with the search bar in dashboard side same as in user side, as the admin type, raffle will be shown onchange on the input of search bar
  
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
    
      <form className="search" action="" onSubmit={onSubmitHandler}>
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