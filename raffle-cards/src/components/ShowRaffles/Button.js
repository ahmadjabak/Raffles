import HomePageCards from '../HomePage/HomePageCards';
import { useState, useEffect } from 'react';


export default function Button(props) {

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    fetch("http://localhost:8080/add", {
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
      })


  }, [])
  const onSubmitHandler = async (e, name) => {
    console.log(name)
    e.preventDefault();
    // props.getData(e.target.data.name.value)
    await fetch(`http://localhost:8080/search?name=${name}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(reponse => {
        if (reponse.ok) {
          return reponse.json();
        } throw reponse;
      }).then(data1 => {
        setData1(data1)
      })
  }
  return (
    <div>
     <input type="submit" value="Delete"></input>

    </div>
  )
}