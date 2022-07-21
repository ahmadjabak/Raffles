import React from 'react'
import './profile.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import axios from "axios";
function Profile() {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const [confirm, setconfirm] = useState('');
    const [token, setToken] = useState(null);
    const [image, setImage] = useState('')

    // This page is for changing the admin information(username and password) that contain 3 inputs (new username, new pawword, and confirm password where the new ones will replaced by the old ones in the database ), and the admin will be able also to upload an image in this page
    const tokenRemove = () => {
        localStorage.removeItem('token');
        setToken(localStorage.getItem('token'))
        console.log(!token);
        if (!token) {
            navigate('/login');
        }
    }
    const onChangeFile = e => {
        setImage((e.target.files[0]));
    }

    useEffect(() => {
        setToken(localStorage.getItem('token'))
        setInterval(() => {
            tokenRemove();
        }, 43200000)

    }

        , [])
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [])



    function thenav() {
        navigate('/raffles');
    }



    const onSubmitHandler = (e) => {
        const formData = new FormData();
        formData.append("profileImage", image)
        formData.append("username", username)
        formData.append("password", password)
        if (!password || !username || password === " " || username === " ") {
            alert("Please Fill all inputs")
        }
        else if (password === confirm) {
            if (window.confirm('Are you sure you want to change your profile information?')) {

                e.preventDefault();

                axios.put(`http://localhost:8080/profile`, formData, {

                    headers: {
                        "Content-Type": "application/json"
                    },

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
        else {
            alert('Password Is not Confirmed!!')
        }
    }
    useEffect((e) => {

        fetch(`http://localhost:8080/profile`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(reponse => {
                if (reponse.ok) {
                    return reponse.json();
                } throw reponse;
            })
            .then(data1 => {
                setData1(data1)

            })

    })

    return (
        <div className="panel">
            <form className="inputs">
                <div className="inputsitem">
                    <div className="container-profile">
                        <div className="avatar-upload">
                            <div className="avatar-edit">
                                <input type='file' id="imageUpload" onChange={onChangeFile} />
                                <label for="imageUpload"></label>
                            </div>
                            <div className="avatar-preview">
                                <img alt="" id="imagePreview" src={image ? image : `/images/${data1.image}`} />
                            </div>
                        </div>
                    </div>
                    <label for="new-username" className="inputslabel">New Username</label>
                    <input required value={username} onChange={(e) => setusername(e.target.value)} className='inputsinputs' type="text" placeholder='Type Username...'></input>
                    <label for="previous-password" className="inputslabel">New password</label>
                    <input required value={password} onChange={(e) => setpassword(e.target.value)} className='inputsinputs' type="Password" placeholder='Type Password...'></input>
                    <label for="new-password" className="inputslabel">Confirm password</label>
                    <input required value={confirm} onChange={(e) => setconfirm(e.target.value)} className='inputsinputs' type="Password" placeholder='Re-type Password...'></input>
                </div>

                <div className="inputsitem inputsitem--cta">
                    <button type="submit" className="btn1" onClick={onSubmitHandler} >Reset</button>
                </div>
            </form>
        </div>





    )
}

export default Profile
