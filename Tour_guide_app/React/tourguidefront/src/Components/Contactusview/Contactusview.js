import React, { useEffect, useState } from 'react'
import './Contactusview.css'
import axios from 'axios'
import Nav from '../Nav/Nav'

export default function Contactusview() {
  const [state,setState]=useState([])
  const [input,setInput]=useState({})
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/Getallcontact').then((response)=>{
      console.log(response.data.data);
      setState(response.data.data)

    }).catch((error)=>{
      console.log(error);
    })
  },[])
  const passid=(value)=>{
    console.log(value);
    axios.get(`http://127.0.0.1:8000/api/Getsinglecontact/${value}`).then((response)=>{
      console.log(response.data.data[0]);
      setInput(response.data.data[0])

    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <>
    <Nav></Nav>
    <div class="card-body">
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4i lab">Name</label>
      <input type="email" class="form-control" id="inputEmail4" value={input.Name}></input>
    </div>
    
  </div>
  <div class="form-group">
    <label for="inputAddress">Contact</label>
    <input type="text" class="form-control" id="inputAddress" value={input.Contact}></input>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Email</label>
    <input type="text" class="form-control" id="inputAddress2" value={input.Email}></input>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Message</label>
    <input type="text" class="form-control" id="inputAddress2" ></input>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>

<div className="contactbox">

    {state.map((item,key)=>(
         <div class="card" >
 

    <h5 >Name:{item.Name}</h5>
    <h5 >Contact:{item.Contact}</h5>
    <h5 >Email:{item.Email}</h5>
    <button onClick={()=>{passid(item.id)}} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Respond</button>   
  </div>

    ))}
        </div>
        </>

   
    
   
  )
}
