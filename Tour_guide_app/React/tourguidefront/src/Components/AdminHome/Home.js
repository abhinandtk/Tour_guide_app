import React, { useEffect } from 'react'
import './Home.css'
import Nav from '../Nav/Nav'
import axios from 'axios'
import Contactpage from '../Contactpage/Contactpage'

export default function Home() {
  const role=JSON.parse(localStorage.getItem('data'))
  console.log(role);
 



      

  
  return (
    <>
    <div class="container-fluid onee">
      <div class="container second">
        <Nav></Nav>
        <div class="container">
          <div class="row">
            <div class="col-4">
              <p class="text-white a p"><br></br>
                “Travel becomes a strategy 
              </p>
              <p class="text-white a r">
                 for accumulating photographs.”
              </p>
              <p class="text-white a q">
                - Susan Sontag
              </p>
            </div>
            <div class="col-1">
              <div class="col "><i class="bi bi-twitter"></i></div>
              <div class="col pt-5"><i class="bi bi-whatsapp"></i></div>
              <div class="col pt-5"><i class="bi bi-instagram"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {role=='User'  ?
    <Contactpage></Contactpage>

  
    :
    role=="Admin"?
    <none></none>
    
    :
  <none></none>
  
  }

    
    </>
   


  )
}
