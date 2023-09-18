import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'


export default function Nav(props) {
  console.log(props.Navfunc);
  const Navigate=useNavigate()
  const role = JSON.parse(localStorage.getItem('data'))
  console.log(role);


  const logout=()=>{

    localStorage.removeItem('data')
    Navigate('/Login')
    

   
  }


  return (
    <>



      {role === "Admin" ?

        <nav class="navbar navbar-expand-lg navbar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand text-white" href="#">Tour Guide</a>
            <ul class="navbar-nav mx-auto">
              <li class="nav-item active">
                <a class="nav-link text-white b" href='/'>Admin Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white b" href='/Add'>Add Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white b" href="/View">View Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white b" href="/LoginView">Login View</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white b" href="/Contactusview" >Contactus View</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white b"  onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        </nav>

          
          :
          role=='User'?
        
          


          <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <a class="navbar-brand text-white" href="#">Tour Guide</a>
              <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                  <a class="nav-link text-white b" href='/'>User Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white b" href="/Profile">Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white b" onClick={()=>{props.Navfunc()}} href='#contact'>Contact us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white b" onClick={logout}>Log out</a>
                </li>
              </ul>
            </div>
          </nav>
          :
          <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <a class="navbar-brand text-white" href="#">Tour Guide</a>
              <ul class="navbar-nav mx-auto">
               
                <li class="nav-item">
                  <a class="nav-link text-white b" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white b" href="/Login">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white b" href="/Signup">Signup</a>
                </li>
              </ul>
            </div>
          </nav>

      }



    </>
  )
}
