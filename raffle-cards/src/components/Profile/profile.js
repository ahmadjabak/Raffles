import React from 'react'
import './profile.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Logo from '../images/logo.png'
import { confirmAlert } from 'react-confirm-alert';

function Profile() {
    const [data, setData] = useState([]);
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const [confirm, setconfirm] = useState('');
    const [token, setToken] = useState(null);
    const tokenRemove = () => {
        localStorage.removeItem('token');
        setToken(localStorage.getItem('token'))
        console.log(!token);
        if(!token) {
          navigate('/login');
        }
      }

      useEffect(() => {
        setToken(localStorage.getItem('token'))
        setInterval(()=>{
          tokenRemove();
        }, 43200000)

      }

        , [])
        useEffect(()=>{
          const token=localStorage.getItem('token');
            if(!token) {
              navigate('/login');
            }
        },[])



    function thenav() {
        navigate('/raffles');
    }



    const onSubmitHandler = (e) => {
        if (!password || !username || password === " " || username === " "){
            alert("Please Fill all inputs")
        }
        else if (password === confirm) {
            if(window.confirm('Are you sure you want to change your profile information?')){
 
            e.preventDefault();
            
            fetch(`http://localhost:8080/profile?username=${username}&password=${password}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify()
            })
                .then(reponse => {
                    if (reponse.ok) {
                        return reponse.json();
                    } throw reponse;
                }).then(data => {
                    
                    setData(data)
                    alert('Username and Password Changed!!');
                    navigate('/raffles');
                })
        }
    }
    }
    
    return (
        <div class="panel">
            <form class="inputs">
                <div class="inputsitem">
                    <label for="new-username" className="inputslabel">New Username</label>
                    <input required value={username} onChange={(e) => setusername(e.target.value)} className='inputsinputs' type="text" class="input" placeholder='Type Username...'></input>
                    <label for="previous-password" className="inputslabel">New password</label>
                    <input required value={password} onChange={(e) => setpassword(e.target.value)} className='inputsinputs' type="Password" class="input" placeholder='Type Password...'></input>
                    <label for="new-password" className="inputslabel">Confirm password</label>
                    <input required value={confirm} onChange={(e) => setconfirm(e.target.value)} className='inputsinputs' type="Password" class="input" placeholder='Re-type Password...'></input>
                </div>

                <div class="inputsitem inputsitem--cta">
                    <button type="submit" className="btn"  onClick={onSubmitHandler} >Reset</button>
                </div>
            </form>
        </div>





    )
}

export default Profile
