import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom"
import './App.css';
import Detailedcards from "./components/HomePage/cardsdetails";
import ContactUs from './components/ContactUs/ContactUsForm';
import Login from "./components/Login/Login";
import ShowRaffles from "./components/ShowRaffles/showRaffles"
import DashboardSideBar from "./components/DashboadSideBar/SideBar";
import AddRaffles from "./components/AddRaffles/addRaffles";
import Profile from "./components/Profile/profile";
import ContactUsDashboard from "./components/ContactUsDashboard/ContactUsDesign"

//import {Switch} from "react-router-dom"

const token = localStorage.getItem('token')
function App() {
  return (

    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route exact path="/" element={<Detailedcards />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/raffles" element={ <DashboardSideBar />} /> 
        <Route exact path="/addraffles" element={ <AddRaffles/>} /> 
        <Route exact path="/profile" element={<Profile /> } />
        <Route exact path="/addraffles" element={<AddRaffles/>}/>
        <Route exact path="/editraffles" element={<AddRaffles/>}/>
        <Route exact path="/contactadmin" element={<ContactUsDashboard/>}/>
      </Routes>
    </Router>

  );
}

export default App;
