import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Edit.css'
import Nav from '../Nav/Nav';




export default function Edit() {
  const [state,setState] =useState({})
  console.log(state);
  const [input, setInput] = useState({});
  
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/Getsingleproduct/${id}`).then((response)=>{
        console.log(response.data.data[0]);
      setState(response.data.data[0])
      setInput(response.data.data[0])
      }).catch((error)=>{
        console.log(error);
      })

    },[])
    const Change=(event)=>{
      const{name,value}=event.target
      setInput({...input,[name]:value})

    }
    const submit=()=>{
      const data=new FormData()
      data.append('Country',input.Country)
      data.append('State',input.State)
      data.append('City',input.City)
      data.append('Category',input.Category)
      data.append('Placename',input.Placename)
      data.append('Location',input.Location)
      data.append('Rating',input.Rating)
      data.append('Price',input.Price)
      data.append('Image',input.Image)
      data.append('Description',input.Description)
      console.log(input);
      axios.put(`http://127.0.0.1:8000/api/Update_product/${id}`,data).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      })

    }
    console.log(input);
   
    
    
  return (
    <>
    <Nav></Nav>
    <div className="editdiv">
     <form className='editform'>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault01">Country</label>
      <input type="text" class="form-control" id="validationDefault01" name='Country' onChange={Change} value={state.Country} required></input>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">State</label>
      <input type="text" class="form-control" id="validationDefault02" name='State'  onChange={Change} defaultValue={state.State} required></input>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault01">City</label>
      <input type="text" class="form-control" id="validationDefault01" name='City'  onChange={Change} defaultValue={state.City} required></input>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">Category</label>
      <input type="text" class="form-control" id="validationDefault02" name='Category'  onChange={Change} defaultValue={state.Category} required></input>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-12 mb-3">
      <label for="validationDefault01">Placename</label>
      <input type="text" class="form-control" id="validationDefault01" name='Placename'  onChange={Change} defaultValue={state.Placename} required></input>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault02">Price</label>
      <input type="text" class="form-control" id="validationDefault02" name='Price'  onChange={Change} defaultValue={state.Price} required></input>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationDefault01">Image</label>
      <input type="file" class="form-control" id="validationDefault01" name='Image'  onChange={(e)=>{console.log(e.target.files[0]);setInput({...input,'Image':e.target.files[0]})}} defaultValue={state.Placename} required></input>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Description</label>
      <input type="text" class="form-control" id="validationDefault03" name='Description'  onChange={Change} defaultValue={state.Description} required></input>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">Rating</label>
      <input type="text" class="form-control" id="validationDefault05" name='Rating'  onChange={Change} defaultValue={state.Rating} required></input>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Location</label>
      <input type="text" class="form-control" id="validationDefault05" name='Location'  onChange={Change} defaultValue={state.Location} required></input>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label class="form-check-label" for="invalidCheck2">
        Check all the fields
      </label>
    </div>
  </div>
  <button class="btn btn-primary" type="button" onClick={submit}>Save</button>
</form>

    </div>
    </>
  )
}
