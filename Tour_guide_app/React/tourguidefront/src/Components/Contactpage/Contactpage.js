import axios from 'axios'
import React, { useState } from 'react'


export default function Contactpage() {
    const [state,inputState]=useState({})
    const inputchange=(event)=>{
      const{name,value}=event.target
      inputState({...state,[name]:value})
    }
    const submit=()=>{
      axios.post('http://127.0.0.1:8000/api/ContactAdd',state).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      })
  
  
    }
  return (
    <>
     <div class="container third" id="contact">

<div class="row">
  <div class="col-md-5">
    <h1 class="h1">Have any doubt?</h1>
    <h1>We are here</h1>
    <h1>to help you</h1>
  </div>
  <div class="col-md-5 twocol">
    <h3 class="text-white mb-3 new">Contact us</h3>
        <input type="text" placeholder="Your name" class="w-75 mt-2 i1" name='Name' onChange={inputchange}></input>
        <input type="text" placeholder="Your Email" class="w-75 mt-5 i1" name='Email' onChange={inputchange}></input>
        <input type="text" placeholder="Phone Number" class="w-75 mt-5 i1" name='Contact' onChange={inputchange}></input>
        <a class="btn btn-light mt-5 bn" onClick={submit}>Sent Request</a>
  </div>
</div>
</div>
    </>
  )
}
