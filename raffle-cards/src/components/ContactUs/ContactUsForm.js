import "./contact.css"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import ContactDesgin from "./ContactUsPageDesign"


export default function ContactUs() {
  
 

  return (
    <div> 
    <Header/>
      <ContactDesgin/>
      <div class="card">
        <h2>Contact Us</h2>
        <div class="row">
          <div class="frist">
          <div class="col">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" id="fname" />
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <label>Last name</label>
              <input type="text" id="llname"/>
            </div>
          </div>
          </div>
          <div class="second">
          <div class="col">
            <div class="form-group">
              <label>Email</label>
              <input type="email" id="email"/>
            </div>
          </div>
          
          <div class="col">
            <div class="form-group">
              <label>Phone Number</label>
              <input type="text" />
            </div>
          </div>
          </div>
          <div class="third">
          <div class="col">
            <div class="form-group">
              <label>Message</label>
              <input type="text" id="mess"/>
            </div>
          </div>
          </div>
          <div class="forth">
          
          <div class="col">
          <div class="form-group">
            <input type="submit" value="Submit" id="ok"/>
            </div>
          </div>
          </div>
        </div>
      </div>
  
      <Footer />
    </div>
    
  )
}