import React, { useState } from "react"
import Logo from '../images/logo.png'

import "./Contact.scss"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import ContactDesgin from "./ContactUsPageDesign"
import { set } from "mongoose"
export default function ContactUs() {

  // const [data, setData]= useState(null);
  // const [error, setError]= useState(null);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  var now = new Date()
  var date = now.toLocaleDateString();
  const time = date;

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

    if (!fname || !lname || !email || !message || fname === " " || lname === " " || email === " " || message === " ") {
    } else {
      fetch(`http://localhost:8080/contactus?fname=${fname}&lname=${lname}&phonenumber=${phonenumber}&email=${email}&time=${time}&message=${message}`, {
        method: 'POST',
        headers: { "Contact-Type": "application/json" }


      }).then((res) => {
        console.log("Deleted", res)
      })
    }

  }

  function showAlert() {
    if (!fname || !lname || !email || !message || fname === " " || lname === " " || email === " " || message === " ") {
      alert("Please fill all the required fields!");
    } else {
      alert("Message Sent!");
      window.location.reload()
    }
  }
  return (
    <div>
      <Header />
      <body className="bodytry">
        <div className="containerR">
          <div className="form-containerR">
            <div className="left-containerR">
              <div className="left-inner-containerR">
                <h2>Let's Chat</h2>
                <p>Whether you have a question, want to start a project or            simply want to connect.</p>
                <br />
                <p>Feel free to send me a message in the contact form</p>
              </div>
            </div>
            <div className="right-containerR">
              <div className="right-inner-containerR">
                <form action="#" onSubmit={Submit}>
                  <h2 className="lg-view">Contact Us</h2>
                  <h2 className="sm-view">Let's Chat</h2>

                  <input type="text" placeholder="First Name" required value={fname} onChange={(e) => setFname(e.target.value)} />

                  <input type="text" placeholder="Second Name" required value={lname} onChange={(e) => setLname(e.target.value)} />
                  <input type="phone" placeholder="Phone" required value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                  <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                  <textarea rows="4" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)}  ></textarea>
                  <button type="submit" value="Submit" onClick={showAlert}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  )
}