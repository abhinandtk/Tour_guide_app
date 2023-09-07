import React, { useEffect, useState } from 'react'
import './Contactusview.css'
import axios from 'axios'

export default function Contactusview() {
  const [state,setState]=useState({})
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/Getallcontact').then((response)=>{
      console.log(response);
      setState(response.data.data[0])

    }).catch((error)=>{
      console.log(error);
    })
  },[])
  return (
   
    <div className="contactbox">
         <div class="card" >
  <div class="card-body">
    <h5 >Name:{state.Name}</h5>
    <h5 >Contact:{state.Contact}</h5>
    <h5 >Email:{state.Email}</h5>
    
  </div>
</div>
    </div>
   
  )
}
