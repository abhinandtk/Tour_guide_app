import React, { useEffect, useState } from 'react'
import './View.css'
import Hotel1 from './Images/Hotel1.jpg'
import Nav from '../Nav/Nav'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'


export default function View() {
  const [state,setState] =useState([])
  const navigate=useNavigate()
console.log(state);

const editmethod=(val)=>{
  const id=val
  navigate(`/Edit/${id}`)
  
}


  const deletemethod=(val)=>{
    const id=val
    axios.delete(`http://127.0.0.1:8000/api/Deleteproduct/${id}`).then((response)=>{
      console.log(response);
    })
    window.location.reload()
  }

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/GetProductdata').then((response=>{
      console.log(response.data.data);
      setState(...state,response.data.data)

    })).catch((error)=>{
      console.log(error);
    })
  },[])
  console.log(state);


  return (
    <>
    <Nav></Nav>
     <div class="container-fluid larg">
      <div className="dmbox">
        <div class=" larrow pt-5">
          <div class="co">
            {state[0]?
            <>
             {state?.map((item,key)=>(
              <div class="card">
              <img src={Hotel1} class="card-img-top" alt="..."></img>
              <div class="card-body c"> 
                <h5>{item.Category}</h5>
                <label>{item.Country} ,</label><label>{item.State} ,</label><label>{item.City}</label>
                  <h5>{item.Placename}</h5>
                  <h5>{item.Rating}</h5>
                  <h5>{item.Price}</h5>
                  <p>{item.Description}</p>
                  <button  className='edit' onClick={()=>{editmethod(item.id)}}>Edit</button>
                  <button  className='delete' onClick={()=>{deletemethod(item.id)}}>Delete</button>
                <div class="line">
                </div>
              </div>
            </div>
               ))}
               </>
               :
               <h1 className='text-white'>NO data found</h1>
            
            }
         
        </div>
        </div>
    </div>
    </div>
    </>
  )
          }
        
