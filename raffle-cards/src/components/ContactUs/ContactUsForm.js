import React, { useState } from "react"
import "./contact.css"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import ContactDesgin from "./ContactUsPageDesign"
export default function ContactUs() {

  // const [data, setData]= useState(null);
  // const [error, setError]= useState(null);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const time = new Date();

  const Submit = (e) => {
    e.preventDefault();
    const newMsg = {
      fname,
      lname,
      phonenumber,
      email,
      time,
      message
    };


    fetch(`http://localhost:8080/contactus?fname=${fname}&lname=${lname}&phonenumber=${phonenumber}&email=${email}&time=${time}&message=${message}`, {
      method: 'POST',
      headers: { "Contact-Type": "application/json" },

    }).then(() => {
      console.log('Successfuly Sent!');
    
    })

  }

  return (
    <div>
      <Header />
      <ContactDesgin />
      <div class="card">
        <h2>Contact Us</h2>
        <form class="row" onSubmit={Submit}>
          <div class="frist">
            <div class="col">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" required value={fname} onChange={(e) => setFname(e.target.value)} />
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label>Last name</label>
                <input type="text" required value={lname} onChange={(e) => setLname(e.target.value)} />
              </div>
            </div>
          </div>
          <div class="second">
            <div class="col">
              <div class="form-group">
                <label>Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label>Phone Number</label>
                <input type="text" required value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
              </div>
            </div>
          </div>
          <div class="third">
            <div class="col">
              <div class="form-group">
                <label>Message</label>
                <input type="text" required value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
            </div>
          </div>
          <div class="forth">

            <div class="col">
              <div class="form-group">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}