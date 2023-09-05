import React from 'react'
import './Home.css'
import Nav from '../Nav/Nav'

export default function Home() {
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
    <div class="container third" id="contact">

      <div class="row">
        <div class="col-md-5">
          <h1 class="h1">Have any doubt?</h1>
          <h1>We are here</h1>
          <h1>to help you</h1>
        </div>
        <div class="col-md-5 twocol">
          <h3 class="text-white mb-3 new">Contact us</h3>
              <input type="text" placeholder="Your name" class="w-75 mt-2 i1"></input>
              <input type="text" placeholder="Your Email" class="w-75 mt-5 i1"></input>
              <input type="text" placeholder="Phone Number" class="w-75 mt-5 i1"></input>
              <a href="" class="btn btn-light mt-5 bn">Sent Request</a>
        </div>
      </div>
    </div>
    </>
   


  )
}
