import React, { useState } from 'react'
import './Login.css'
import Nav from '../Nav/Nav'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [input,setInput] =useState({})
  const inputChange=((event)=>{
    const {name,value}=event.target
    setInput({...input,[name]:value}) 
  })
  const submit=()=>{
    console.log(input);
    axios.post('http://127.0.0.1:8000/api/UserLogin',input).then((response)=>{
    console.log(response.data.data);
    toast('Login Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

setInterval(set,1000)
function set(){
  localStorage.setItem('data',JSON.stringify(response.data.data.role))
    localStorage.setItem('userid',JSON.stringify(response.data.data.user_id))
    if(response.data.data.role==='User'){
      navigate('/')
      
    }
    else if(response.data.data.role==='Admin'){
      navigate('/')
    }


}



    
    

  }).catch((error=>{
    console.log(error.response.data.data);
    toast.success(error.response.data.data, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }))
  }
  
  return (
    <>
    <Nav></Nav>
    <div className="square">
    <ToastContainer></ToastContainer>
      <h5 className='text-center pt-5'>Welcome, Please Enter Your Details</h5>
      <h5 className=' text-center  w-75 p-2 google'>Login with google</h5>
      <div className="inputbox">
      <input type="text" placeholder='Email' className='mt-5' name='Username' onChange={inputChange}></input>
      <input type="text" placeholder='Password' className='mt-5' name='Password' onChange={inputChange}></input>
      <input type="button"  className='mt-5 text-white' value='Login' onClick={submit}/>
      </div>
      


    </div>
    
    </>
   
  )
}
