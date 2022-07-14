import React from "react"
import "./ContactUsDashboard.css"
import { RiDeleteBin5Line } from "react-icons/ri"
import {useState, useEffect} from 'react';


const onSubmit=(e)=>{
    localStorage.removeItem('token');
}

export default function ContactUsDesign() {
    const [data, setData]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:8080/contactus", {
             method:'GET',
              headers: {
                   "Content-Type": "application/json"
              }
   })
      .then(reponse=>{
        if(reponse.ok){
          return reponse.json();
        } throw reponse;
      }).then(data=>{
        setData(data)
      })
    },[])
    return (
       <form>
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
                    <td>{datas.fname}</td>
                    <td>{datas.lname}</td>
                    <td>{datas.phonenumber}</td>
                    <td>{datas.email}</td>
                    <td>{datas.time}</td>
                    <td>{datas.message}</td>
                    <td><RiDeleteBin5Line/></td>
                </tr>
                </tbody>
          )
        } 
                
        </table>




       </form>
       
    )
}
