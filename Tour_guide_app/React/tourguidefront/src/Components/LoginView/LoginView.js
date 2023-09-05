import React, { useEffect, useState } from 'react'
import './LoginView.css'
import Nav from '../Nav/Nav'
import axios from 'axios'

export default function LoginView() {
    const [state,setState] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/Getalldata').then((response)=>{
            setState(response.data.data)
            console.log(response.data.data);

        }).catch((error) => {
            console.error('Error fetching data:', error);
          })
    },[])
    console.log(state);

  return (
    <>
    <Nav></Nav>
    <div className="cont">
        {state.map((item,key)=>(

<div className="width">
      <h6>Logid:{item.Log_id} </h6>
      <h6>User status: {item.User_status}</h6>
      <h6>User Id: {item.User_id}</h6>
      <h6>Name: {item.Name}</h6>
      <h6>Contact: {item.Contact}</h6>
      <h6>Email: {item.Email}</h6>
    </div> 
        ))}
    </div>
    </>
  )
}
