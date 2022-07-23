import HomePageCards from './HomePageCards';

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Home from "./home.js"
import DesignedCards from './DesignedCards';
import './ImageSlider.css';
import { useState, useEffect } from 'react';

import LoadingPage from "../LoadingPage/LoadingPage";
import ScrollToTop from "react-scroll-to-top";


// reading all the available raffles for sale, after being added by the admin, with a search bar where when typed in the search input it will search for the name of raffle with the input that is typed



export default function Detailedcards(props) {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(3);
  useEffect(() => {
    fetch("http://localhost:8080/api/raffles", {
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
        setLoading(false);
      })
  }, [])
  const onSubmitHandler = async (e, name) => {
    console.log(name)
    e.preventDefault();
    await fetch(`http://localhost:8080/api/search?name=${name}`, {
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

  const showRaffles = () => {
    let theRaffles = document.getElementById("hideit");
    setPage((prevValue) => prevValue + 3);
    if (page >= data.length) {
      theRaffles.style.visibility = "hidden";
    }
  }

  console.log(data);
  if (loading) return <LoadingPage />;

  return (
    <div>
      <Header />
      <Home />
      <DesignedCards />
      <ScrollToTop className="icon-position icon-style" />
      

      <div className="searchHome">

        <p className="pCard">Search for a Raffle Card</p>

        <div className="boxHome">
          <form name="search">
            <input type="text" className="inputHome" name="txt" onChange={(e) => onSubmitHandler(e, e.target.value)} />
          </form>

        </div>
      </div>

      {(data1.length > 0) ?

        <div className="detailed-cards-container">

          {
            data1.map((datas, index) =>
              <HomePageCards key={index} id={datas._id} desc={datas.desc} price={datas.price} img={datas.image} name={datas.name} start={datas.startdate} end={datas.endate} />


            )

          }

        </div> :
        <div className="detailed-cards-container">

          {
            data.slice(0, page).map((datas) =>
              <HomePageCards id={datas._id} desc={datas.desc} price={datas.price} img={datas.image} name={datas.name} start={datas.startdate} end={datas.endate} />,

            )
          }
          <button onClick={showRaffles} id="hideit">Show More</button>

        </div>
      }



      <Footer />
    </div>
  )
}
