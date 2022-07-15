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


    fetch(`http://localhost:8080/contactus?fname=${fname}&lname=${lname}&phonenumber=${phonenumber}&email=${email}&time=${time}&message=${message}`, {
      method: 'POST',
      headers: { "Contact-Type": "application/json" }
     

    }).then((res) => {
      console.log("Deleted", res)
      
    });

  }

  return (
    <div>
      <Header />
      {/* <ContactDesgin />
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
      </div> */}
      <body className="bodytry">
        <div class="containerR">
          <div class="form-containerR">
            <div class="left-containerR">
              <div class="left-inner-containerR">
                <h2>Let's Chat</h2>
                <p>Whether you have a question, want to start a project or            simply want to connect.</p>
                <br />
                <p>Feel free to send me a message in the contact form</p>
              </div>
            </div>
            <div class="right-containerR">
              <div class="right-inner-containerR">
                <form action="#" onSubmit={Submit}>
                  <h2 class="lg-view">Contact Us</h2>
                  <h2 class="sm-view">Let's Chat</h2>

                  <input type="text" placeholder="First Name" required  value={fname} onChange={(e) => setFname(e.target.value)} />
             
                  <input type="text" placeholder="Second Name" required value={lname} onChange={(e) => setLname(e.target.value)}/>
                  <input type="phone" placeholder="Phone" required value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                  <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}  />
                
                  <textarea rows="4" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)}  ></textarea>
                  <button type="submit" value="Submit" onClick={()=>window.location.reload()}>Submit</button>
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