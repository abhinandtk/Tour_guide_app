import React, { useEffect, useState } from 'react'
import './Profile.css'
import Nav from '../Nav/Nav'
import shelby from './Images/thomasshelby.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Contactpage from '../Contactpage/Contactpage'


export default function Profile() {
  const [nav,setNav]=useState(false)
  const [input,setInput]=useState(false)
  const [values ,setValues]=useState("")
  const[update,setUpdate]=useState({})
  const [state,setState] =useState(JSON.parse(localStorage.getItem('userid')) || {})
  const id=state

  useEffect(()=>{
    console.log(state);
    const id=state
    axios.get(`http://127.0.0.1:8000/api/GetsingleRegister/${id}`).then((response)=>{
      console.log(response.data.data[0]);
      setValues(response.data.data[0])
    }).catch((error)=>{
      console.log(error);
    })
    
  },[])
  const inputChange=(event)=>{
    const{name,value}=event.target
    setUpdate({...update,[name]:value})
    console.log(update);


  }
  const Navcontent=(value)=>{
    console.log(value);
    setNav(true)
  
  
  }

  const submit=()=>{
    setInput(true)
  }
  const savechange=(id)=>{
    console.log(id);
    axios.put(`http://127.0.0.1:8000/api/UpdateRegister/${id}`,update).then((response)=>{
      console.log(response.data.message);
      
      toast.success(response.data.message,{
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setInterval(set,600)
        function set(){
          window.location.reload()
        }
       
    }).catch((error)=>{
      console.log(error);
    })
  }
  console.log(values);
  return (
    <>
    <Nav Navfunc={Navcontent}></Nav>
    <div className="profbox">
        <div className="profirstbox">
          <ToastContainer></ToastContainer>
            <h4> <i class="bi bi-pencil mr-2 ml-3" onClick={submit}></i>Edit Profile</h4>
            {input==true ?
             <div className="inputboxx">
             <label htmlFor="">Name:</label>
             <input type="text" defaultValue={values.Name} name='Name' onChange={inputChange}/>
             <label htmlFor="">Contact:</label>
             <input type="text" defaultValue={values.Contact} name='Contact' onChange={inputChange}/>

             <label htmlFor="">Email:</label>
             <input type="text" defaultValue={values.Email} name='Email' onChange={inputChange}/>
             <button className='w-50 mt-4' onClick={()=>savechange(id)}>Save Changes</button>

             
             </div> 
             :
             <null></null>
            }
            
                   
        </div>
        <div className="secprofibox">
            <h2 className='ml-4 mt-2'>Edit profile</h2>
            <img src={`Django/tourbackend/media/${values.Image}`}  alt="" />
            
              <div className="formbox">
              <h5>User_id : {values.id}</h5>  
              <h5>Name: {values.Name}</h5>
              <h5>Contact: {values.Contact}</h5>
              <h5>Email: {values.Email}</h5>  
            </div>  
          </div>
    </div>
  
    {nav==true ?
    <Contactpage></Contactpage>
    :
    <none></none>
    }
    

    
    </>
  )
}
