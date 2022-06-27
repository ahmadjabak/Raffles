import HomePageCards from './HomePageCards';
import luffy from "../images/luffy.jpg"
import Footer from "../Footer/Footer"
const raffles = [
  {
    price: "6.00",
    name: "traffic raffle",
    Start: "11/3/2029",
    end: "11/4/2029"
  },
  {
    price: "6.00",
    name: "traffic raffle",
    Start: "11/3/2029",
    end: "11/4/2029"
  },
  {
    price: "6.00",
    name: "traffic raffle",
    Start: "11/3/2029",
    end: "11/4/2029"
  },
  {
    price: "6.00",
    name: "traffic raffle",
    Start: "11/3/2029",
    end: "11/4/2029"
  },
  {
    price: "6.00",
    name: "traffic raffle",
    Start: "11/3/2029",
    end: "11/4/2029"
  },
  {
    price: "6.00",
    name: "traffic raffle",
    Start: "11/3/2029",
    end: "11/4/2029"
  },
  {
    price: "6.00",
    name: "traffic raffle",
    Start: "11/3/2029",
    end: "11/4/2029"
  },
  {
    price: "6.00",
    name: "traffic raffle",
    Start: "11/3/2029",
    end: "11/4/2029"
  },
]


export default function Detailedcards(props) {
  return (
    <div>
      <Footer />

      <div className="detailed-cards-container">

        {
          raffles.map((raffles) =>
            <HomePageCards price={raffles.price} img={luffy} name={raffles.name} start={raffles.Start} end={raffles.end} />
          )
        }
      </div>
    </div>
  )
}