import axios from "axios";

import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./addraffles.scss"
import e from "cors";
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
    axios
      .post("http://localhost:8080/raffles", formData, {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },

      })
      .then((res) => console.log('Successfuly Sent!'))
      .catch((err) => {
        console.log(err);
      });
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
    axios
      .put(`http://localhost:8080/raffles/${location.state.id}`, formData, {

        headers: { 'Content-Type': 'multipart/form-data' },

      })
      .then((res) => console.log('Successfuly Sent!'))
      .catch((err) => {
        console.log(err);
      });
  }

  const fetchRaffles = async() => {
    await fetch(`http://localhost:8080/get/${id ? id : location.state.id}`, {
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


  if (id === null) {
    return (

      <div class="back">
        <div class="container1">
          <div class="left">
            <div class="image-dash">
              <img src="../images/logo.png" />
            </div>


            <div class="form" encType="multipart/from-data">

              <input type="text" class="form-field animation a3" placeholder="Raffle Name" value={name} onChange={(e) => { setName(e.target.value) }} required />
              <input type="file" id="upload-image" class="form-field animation a4" placeholder="Image" onChange={onChangeFile} required />
              <input type="text" class="form-field animation a3" placeholder="Price" value={price} onChange={(e) => { setPrice(e.target.value) }} required />
              <input type="date" class="form-field animation a4" placeholder="Start Date" value={start} onChange={(e) => { setStart(e.target.value) }} required />
              <input type="date" class="form-field animation a3" placeholder="End Date" value={end} onChange={(e) => { setEnd(e.target.value) }} required />
              <textarea type="text" class="form-field animation a4" placeholder="Description" value={desc} onChange={(e) => { setDesc(e.target.value) }} required />
              <div class="save">
                <div>
                  <input type="submit" value="SAVE" className="btn" onClick={onSubmitHandler} />
                  <input type="submit" value="BACK" className="btn" onClick={getBack} />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    )
  } else {


    return (
      <div class="back">
        <div class="ids" >
          <input type="text" value={id} />
        </div>
        <div class="container1">
          <div class="left">
            <div class="image-dash">
              <img src="../images/logo.png" />
            </div>
            <div class="form" encType="multipart/from-data">
              <input type="text" class="form-field animation a3" placeholder="Raffle Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="file" class="form-field animation a4" onChange={onChangeFile} required />
              <input type="text" class="form-field animation a3" placeholder="Price" value={price} onChange={(e) => { setPrice(e.target.value) }} required />
              <input type="text" class="form-field animation a4" placeholder="Start Date" value={start} onChange={(e) => { setStart(e.target.value) }} required />
              <input type="text" class="form-field animation a3" placeholder="End Date" value={end} onChange={(e) => { setEnd(e.target.value) }} required />
              <textarea type="text" class="form-field animation a4" placeholder="Description" value={desc} onChange={(e) => { setDesc(e.target.value) }} required />
              <div class="save">

                <input type="submit" value="EDIT" className="btn" onClick={onSubmitHandlers} />
                <input type="submit" value="BACK" className="btn" onClick={getBack} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}