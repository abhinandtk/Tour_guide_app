import React, { useEffect, useState } from 'react'
import './Contactusview.css'
import axios from 'axios'
import Nav from '../Nav/Nav'
import { ToastContainer,toast } from 'react-toastify'

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
  const inputChange=(event)=>{
    const {name,value}=event.target
    setInput({...input,[name]:value})

  }
  const send = ()=>{
    console.log(input);
    axios.post('http://127.0.0.1:8000/api/Replymessage',input).then((response)=>{
      console.log(response);
      toast('Message sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       
        
    }).catch((error)=>{
      console.log(error);
    })


  }


  return (
    <>
    <Nav></Nav>
    <ToastContainer></ToastContainer>

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
      <input type="email" class="form-control" id="inputEmail4" name='Name' value={input.Name}></input>
    </div>
    
  </div>
  <div class="form-group">
    <label for="inputAddress">Contact</label>
    <input type="text" class="form-control" id="inputAddress" name='Contact' value={input.Contact}></input>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Email</label>
    <input type="text" class="form-control" id="inputAddress2" name='Email' value={input.Email}></input>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Message</label>
    <input type="text" class="form-control" id="inputAddress2" name='Reply' onChange={inputChange}></input>
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick={send}>Send</button>
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
