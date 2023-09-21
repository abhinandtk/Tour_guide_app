import React, { useState } from 'react'
import './Add.css'
import Nav from '../Nav/Nav'
import { useNavigate } from 'react-router-dom'
import axios, { Axios } from 'axios'
import { ToastContainer, toast } from 'react-toastify'


export default function Add() {
  const [state,inputState] =useState({})
  const navigate=useNavigate()
  const inputChange=(event)=>{
     const{name,value}=event.target
     inputState({...state,[name]:value})
  }
  const submit=()=>{
    console.log(state);
    const data=new FormData()
    data.append('Country',state.Country)
    data.append('State',state.State)
    data.append('City',state.City)
    data.append('Category',state.Category)
    data.append('Placename',state.Placename)
    data.append('Location',state.Location)
    data.append('Rating',state.Rating)
    data.append('Price',state.Price)
    data.append('Image',state.Image)
    data.append('Description',state.Description)
    axios.post('http://127.0.0.1:8000/api/ProductAdd',data).then((response)=>{
      console.log(response.data.message);
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }).catch((error=>{
      console.log(error);
    }))

  }

  return (
    <>
    <Nav></Nav>
    <div class="container-fluid w-100  pb-5">
      <ToastContainer></ToastContainer>
  <div class="row mt-5 cent">
    <div class="col-8">
    <div class="row twoo">
        <form class="formm">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Country</label>
                <input type="text" class="form-control" id="inputEmail4" name='Country' onChange={inputChange}></input>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">State</label>
                <input type="text" class="form-control" id="inputPassword4" name='State' onChange={inputChange}></input>
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">City</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="" name='City' onChange={inputChange}></input>
            </div>
            <div class="form-group">
              <label for="inputAddress2">Category</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="" name='Category' onChange={inputChange}></input>
            </div>
            <div class="form-row ">
              <div class="form-group col-md-6">
                <label for="inputCity">Placename</label>
                <input type="text" class="form-control" id="inputCity" name='Placename' onChange={inputChange}></input>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Location</label>
                <input type="text" class="form-control" id="inputCity" name='Location' onChange={inputChange}></input>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Rating</label>
                <input type="text" class="form-control" id="inputZip" name='Rating' onChange={inputChange}></input>
              </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Price</label>
                  <input type="text" class="form-control" id="inputEmail4" name='Price' onChange={inputChange}></input>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputEmail4">Image</label>
                  <input type="file" class="form-control" id="inputEmail4" name='Image' onChange={(e)=>{inputState({...state,'Image':e.target.files[0]})}}></input>
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Description</label>
                <input type="text" class="form-control" id="inputPassword4" name='Description' onChange={inputChange}></input>
            </div>
            <button type="button" class="btn btn-primary" onClick={submit}>Sign in</button>
          </form>

    </div>
    </div>
    <div class=" secnav">
      <div class="col "><i class="bi bi-twitter"></i></div>
              <div class="col "><i class="bi bi-whatsapp i"></i></div>
              <div class="col "><i class="bi bi-instagram i"></i></div>
    </div>
  </div>
</div>
    </>
  )
}
