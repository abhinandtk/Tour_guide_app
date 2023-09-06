import React, { useEffect, useState } from 'react'
import './Profile.css'
import Nav from '../Nav/Nav'
import shelby from './Images/thomasshelby.jpg'
import axios from 'axios'

export default function Profile() {
  const [input,setInput]=useState(false)
  const [values ,setValues]=useState({})
  const [state,setState] =useState(JSON.parse(localStorage.getItem('userid')) || {})
  useEffect=()=>{
    
  }
  axios.put(`http://127.0.0.1:8000/api/UpdateRegister/${state}`).then((response)=>{
    console.log(response);
    setValues(response.data.data)
  })

  const submit=()=>{
    setInput(true)


  }
  
  console.log(values);
  return (
    <>
    <Nav></Nav>
    <div className="profbox">
        <div className="profirstbox">
            <h4> <i class="bi bi-pencil mr-2 ml-3" onClick={submit}></i>Edit Profile</h4>
            {input==true ?
             <div className="inputboxx">
             <label htmlFor="">Name:</label>
             <input type="text" />
             <label htmlFor="">Contact:</label>
             <input type="text" />

             <label htmlFor="">Email:</label>
             <input type="text" />
             <button className='w-50 mt-4'>Save Changes</button>

             
             </div> 
             :
             <null></null>
            }
            
                   
        </div>
        <div className="secprofibox">
            <h2 className='ml-4 mt-2'>Edit profile</h2>
            <img src={shelby} alt="" />
            
              <div className="formbox">
              <h5>User_id d: {state.user_id}</h5>  
              <h5>Name: {state.name}</h5>
              <h5>Contact: {state.contact}</h5>
              <h5>Email: {state.email}</h5>  
            </div>  
          </div>
    </div>
    
    </>
  )
}
