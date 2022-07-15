import React from 'react'
import './profile.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Logo from '../images/logo.png'
import { confirmAlert } from 'react-confirm-alert';

function Profile() {
    const [data, setData] = useState([]);
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const [confirm, setconfirm] = useState('');

    function thenav() {
        navigate('/raffles');
    }



    const onSubmitHandler = (e) => {
        if (!password || !username || password === " " || username === " "){
            alert("Please Fill all inputs")
        }
        else if (password === confirm) {
            if(window.confirm('Are you sure you want to change your profile information?')){
    // confirmAlert({
    //             title: 'Confirm to submit',
    //             message: 'Are you sure to do this.',
    //             buttons: [
    //               {
    //                 label: 'Yes',
    //                 onClick: () => alert('Click Yes')
    //               },
    //               {
    //                 label: 'No',
    //                 onClick: () => alert('Click No')
    //               }
    //             ]
    //           });
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

        else {
            alert('Password is not Matched')
        }
    }
    }
    return (
        <div class="panel">
            <img className="panelavatar" src={Logo} />
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
                    <button type="submit" onClick={thenav} className="btn" >Back</button>
                </div>
            </form>
        </div>





    )
}

export default Profile
