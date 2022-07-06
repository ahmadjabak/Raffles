

import {useLocation,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function AddRaffles(){
    const location = useLocation();
    const navigate = useNavigate();
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
    
      })
      useEffect(()=>{
        const token=localStorage.getItem('token');
          if(!token) {
            navigate('/login');
          }
      },[])
return (

    <>
    <input type="text" value={location.state.id}/> 

    </>
    )
}

