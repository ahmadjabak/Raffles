import React from "react"
import "./Login.css"
import wave from '../images/wave.png'
import Logo from '../images/logo.png'
import bg from '../images/bg.svg'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    const msg = { username, password };
    e.preventDefault();
    fetch(`http://localhost:8080/admin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(msg)
    })
      .then(reponse => {
        if (reponse.ok) {
          return reponse.json();
        } throw reponse;
      }).then(data => {
        
        setData(data)
        if (data.admin) {
          localStorage.setItem('token', data.admin)

            navigate('/raffles',);
          
        } else {
          return alert('incorrect username and password')
        }
      },[])  
  }
  console.log(data)

  return (
    <div>
      <body>
        <img class="wave" src={wave}></img>
        <div class="container">
          <div class="img">
            <img src={bg}></img>
          </div>
          <div class="login-content">
            <form action="index.html">
              <img src={Logo}></img>
              <h2 class="title">Welcome</h2>
              <div class="input-div one">
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <div class="div">
                  {/* <h5>Username</h5> */}
                  <input placeholder="Username" type="text" class="input" value={username} onChange={(e) => { setUser(e.target.value) }}></input>
                </div>
              </div>
              <div class="input-div pass">
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                  {/* <h5>Password</h5> */}
                  <input placeholder="Password" type="password" class="input" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                </div>
              </div>
              <input type="submit" class="btn" value="Login" onClick={onSubmitHandler}></input>
            </form>
          </div>
        </div>
      </body>
    </div>
  )
}
