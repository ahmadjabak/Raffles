import React from "react"
import "./Login.css"
import wave from '../images/wave.png'
import Logo from '../images/logo.png'
import bg from '../images/bg.svg'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
export default function Login() {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // compare the username and password typed are the same that are in database, token will be generated and set in local storage in order to be read(get) for future usages 


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
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/raffles');
    }
  })


  
  function showeye() {
  const toggle = document.querySelector(".toggle"),
        input = document.querySelector(".input");

        toggle.addEventListener("click", () =>{
            if(input.type ==="password"){
              input.type = "text";
              toggle.classList.replace(<AiFillEyeInvisible/>, <AiFillEye/>);
            }else{
              input.type = "password";
            }
        })
      }
  return (
    <div>
      <body>
        <img className="wave" src={wave}></img>
        <div className="container">
          <div className="img">
            <img src={bg}></img>
          </div>
          <div className="login-content">
            <form action="index.html">
              <img src={Logo}></img>
              <h2 className="title">Welcome</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  
                  <input placeholder="Username" type="text" className="input" value={username} onChange={(e) => { setUser(e.target.value) }}></input>
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  
                  <input placeholder="Password" type="password" className="input" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                  
                </div>
              </div>
              
              <input type="submit" className="btn" value="Login" onClick={onSubmitHandler}></input>
            </form>
          </div>
        </div>
      </body>
    </div>
  )
}
