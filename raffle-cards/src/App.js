import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import './App.css';
import Detailedcards from "./components/HomePage/cardsdetails";
import ContactUs from './components/ContactUs/ContactUsForm';
import Login from "./components/Login"

function App() {
  return (

    <Router>
      <div className="App">

      </div>
      <Routes>
        <Route exact path="/" element={<Detailedcards />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
