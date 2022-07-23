import axios from "axios";

import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./addraffles.scss"
import './addRafflesHeader.css'


// a function to add and edit raffle
// to add a raffle(/addraffle) you need to enter all inputs and then on add button
// to edit a raffle(/editraffle) you need to update the image and update what you need in the other inputs

export default function AddRaffles() {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [desc, setDesc] = useState('');

  const onChangeFile = e => {

    setImage(e.target.files[0]);

  }
  const getBack = e => {

    navigate('/raffles')

  }
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

  })
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }
  }, [])
  useEffect(() => {

    location.state ? setId(location.state.id) : setId(null);
  })
  const onSubmitHandler = (e) => {

    const formData = new FormData();
    formData.append("ticketImage", image)
    formData.append("name", name)
    formData.append("price", price)
    formData.append("startdate", start)
    formData.append("enddate", end)
    formData.append("desc", desc)
    e.preventDefault();
    if (!name || !price || !image || !start || !end || !desc) {
      alert("Please Fill all the requirment fields!")
    }
    else if (window.confirm("Are you sure you want to add this raffle ?")) {
      axios
        .post("http://localhost:8080/api/raffles", formData, {
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' },

        })
        .then((res) => console.log('Successfuly Sent!'))
        .catch((err) => {
          console.log(err);
        });
      alert("Raffle is Added!");
    } else {
      alert("Failed to add!");
    }
  }
  const onSubmitHandlers = (e) => {

    const formData = new FormData();
    formData.append("ticketImage", image)
    formData.append("name", name)
    formData.append("price", price)
    formData.append("startdate", start)
    formData.append("enddate", end)
    formData.append("desc", desc)
    e.preventDefault();


    if (window.confirm("Are you sure you want to add this raffle ?")) {
      axios
        .put(`http://localhost:8080/api/raffles/${location.state.id}`, formData, {

          headers: { 'Content-Type': 'multipart/form-data' },

        })
        .then((res) => console.log('Successfuly Sent!'))
        .catch((err) => {

          console.log(err);
        });
      alert("Raffle is Updated");
    }
    else {
      alert("You must update the image!")
    }

  }

  const fetchRaffles = async () => {
    await fetch(`http://localhost:8080/api/get/${id || location.state.id}`, {
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
      .then(data => {

        setData(data)
        setName(data.name)
        setPrice(data.price)
        setStart(data.startdate)
        setEnd(data.endate)
        setDesc(data.desc)

      })
  }


  useEffect(() => {
    fetchRaffles()
    console.log(data)
  }, [])
  function thenav() {
    navigate('/raffles');
  }
  if (id === null) {
    return (

      <div className="back">
        <div className="container1">

          <div className="left">
            


            <div className="form" encType="multipart/from-data">
              <input type="text" className="form-field animation a3" placeholder="Raffle Name" value={name} onChange={(e) => { setName(e.target.value) }} required />
              <input type="file" id="upload-image" className="form-field animation a4" placeholder="Image" onChange={onChangeFile} required />
              <input type="text" className="form-field animation a3" placeholder="Price" value={price} onChange={(e) => { setPrice(e.target.value) }} required />

              <label htmlFor="Start Date" className="start_end">Start Date</label>
              <input type="date" className="form-field animation a4" id="imputDate" value={start} onChange={(e) => { setStart(e.target.value) }} required />

              <label htmlFor="Start Date" className="start_end">End Date</label>
              <input type="date" className="form-field animation a3" value={end} onChange={(e) => { setEnd(e.target.value) }} required />

              <textarea type="text" className="form-field animation a4" placeholder="Description" value={desc} onChange={(e) => { setDesc(e.target.value) }} required />
              <div className="save">
                <div>
                  <button type="submit" className="btn" onClick={onSubmitHandler}>ADD</button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    )
  } else {


    return (
      <div className="back">
        <div className="ids" >
          <input type="text" value={id} />
        </div>
        <div className="container1">
          <div className="left">
            <div className="form" encType="multipart/from-data">
              <label htmlFor="Start Date" className="start_end">Raffle Name</label>
              <input type="text" className="form-field animation a3" placeholder="Raffle Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <label htmlFor="Start Date" className="start_end">Image</label>
              <input type="file" className="form-field animation a4" onChange={onChangeFile} required />
              <label htmlFor="Start Date" className="start_end">Price</label>
              <input type="text" className="form-field animation a3" placeholder="Price" value={price} onChange={(e) => { setPrice(e.target.value) }} required />
              <label htmlFor="Start Date" className="start_end">Start Date</label>
              <input type="date" className="form-field animation a4" placeholder="Start Date" value={start} onChange={(e) => { setStart(e.target.value) }} required />
              <label htmlFor="Start Date" className="start_end">End Date</label>
              <input type="date" className="form-field animation a3" value={end} onChange={(e) => { setEnd(e.target.value) }} required />
              <label htmlFor="Start Date" className="start_end">Description</label>
              <textarea type="text" className="form-field animation a4" placeholder="Description" value={desc} onChange={(e) => { setDesc(e.target.value) }} required />
              <div className="save">
                <button type="submit" className="btn" onClick={onSubmitHandlers}>SAVE</button>

              </div>
            </div>
          </div>
        </div>
      </div>

    )

  }

}