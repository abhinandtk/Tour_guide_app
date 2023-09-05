import React, { useState } from 'react'
import './Profile.css'
import Nav from '../Nav/Nav'
import shelby from './Images/thomasshelby.jpg'

export default function Profile() {
  const [state,setState] =useState(JSON.parse(localStorage.getItem('userdata')) || {})
  return (
    <>
    <Nav></Nav>
    <div className="profbox">
        <div className="profirstbox">
            <h4> <i class="bi bi-pencil mr-2 ml-3"></i>Edit Profile</h4>
        </div>
        <div className="secprofibox">
            <h2 className='ml-4 mt-2'>Edit profile</h2>
            <img src={shelby} alt="" />
            
              <div className="formbox">
              <h5>User_id d: {state.user_id}</h5>  
              <h5>Name: {state.name}</h5>
              <h5>Contact: {state.contact}</h5>
              <h5>Email: {state.email}</h5>  
            </div>            </div>
    </div>
    
    </>
  )
}
