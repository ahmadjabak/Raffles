import React from "react"
import "./ContactUsDashboard.css"
import { RiDeleteBin5Line } from "react-icons/ri"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import LoadingPage from "../LoadingPage/LoadingPage";





const onSubmit = (e) => {
  localStorage.removeItem('token');
}

export default function ContactUsDesign({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const tokenRemove = () => {
    localStorage.removeItem('token');
    setToken(localStorage.getItem('token'))
    console.log(!token);
    if (!token) {
      navigate('/login');
    }
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

  useEffect(() => {
    fetch("http://localhost:8080/api/contactus", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(reponse => {
        if (reponse.ok) {
          return reponse.json();
        } throw reponse;
      }).then(data => {
        setData(data)
        setLoading(false);
      })
  }, [])


  const onSubmitHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`http://localhost:8080/api/contactus?id=${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => {
          console.log("Deleted", res)
          window.location.reload();
        })
    }
  }

  if (loading) return <LoadingPage />;

  return (
    <div>
    
      <form className="formContact">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Date</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          {

            data.map((datas) =>

              <tbody>
                <tr>

                  <td data-lable="First Name">{datas.fname}</td>
                  <td data-lable="Last Name">{datas.lname}</td>
                  <td data-lable="Phone Number">{datas.phonenumber}</td>
                  <td data-lable="Email">{datas.email}</td>
                  <td data-lable="Date">{datas.time}</td>
                  <td data-lable="Message">{datas.message}</td>
                  <td data-lable="Action" onClick={() => onSubmitHandler(datas._id)} className="iconDesign"><RiDeleteBin5Line /></td>
                </tr>
              </tbody>
            )

          }

        </table>




      </form>
    </div>
  )
}
