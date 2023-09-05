import React, { useState } from 'react'
import './Signup.css'
import Nav from '../Nav/Nav'
import axios from 'axios'

export default function Signup() {
    const [state,setState] = useState([])
    const inputChange=(event)=>{
        const{name,value}=event.target
        setState({...state,[name]:value})

    }
    const submit=()=>{
     console.log(state);
     axios.post('http://127.0.0.1:8000/api/UserRegister',state).then((response)=>{
        console.log(response);
     }).catch((error)=>{
        console.log(error);
     })
    }
  return (
    <>
    <Nav></Nav>
    <div class="contain">
        <div class="row">
            <div class="col-3">
                <h1 class="text-center">Sign Up</h1>
                <p class="text-center">Enter your details to sign up</p>
                <form>
                  <div class="form-group kk">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" name='Name' onChange={inputChange}></input>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name='Email' onChange={inputChange}></input>
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact" name='Contact' onChange={inputChange}></input>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Username" name='Username' onChange={inputChange}></input>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name='Password' onChange={inputChange}></input>
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary w-100" onClick={submit}>Submit</button>
                </form>

            </div>
        </div>
    </div>
    </>
  )
}
