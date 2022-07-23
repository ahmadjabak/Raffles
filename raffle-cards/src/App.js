import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom"

import Detailedcards from "./components/HomePage/cardsdetails";
import ContactUs from './components/ContactUs/ContactUsForm';
import Login from "./components/Login/Login";
import AdminDash from "./components/ShowRaffles/AdminDash";
import AddDash from "./components/AddRaffles/AddDash";
import ProfileDash from "./components/Profile/ProfileDash";
import ContactDash from "./components/ContactUsDashboard/ContactDash";


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
        <Route exact path="/raffles" element={ <AdminDash />} /> 
       
        <Route exact path="/profile" element={<ProfileDash /> } />
        <Route exact path="/addraffles" element={<AddDash/>}/>
        <Route exact path="/editraffles" element={<AddDash/>}/>
        <Route exact path="/contactadmin" element={<ContactDash/>}/>
      </Routes>
    </Router>

  );
}

export default App;
