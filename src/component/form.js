import { useState } from "react";
import React from 'react'

export default function Form() {
 const[FormData,setFomData]=useState({ firstName:" ",lastName:" ",Address:" "})
  function handleChange(e){
    setFomData({...FormData,[e.target.name]:e.target.value})
  }
  function handleSubmit(e){
      console.log(FormData);
      e.preventDefault();
  }
  return (
    <div>   
         <form onSubmit={handleSubmit}> 
          <label>Fname</label>
         <input type="text" name="firstName" value={FormData.firstName} onChange={handleChange} />
         <br></br>
         <label>LastName</label>
         <input type="text" name="lastName" value={FormData.lastName} onChange={handleChange} />
         <br></br>
         <label>Address</label>
         <textarea name="Address" value={FormData.Address} onChange={handleChange}></textarea>
         <br></br>
         <button type="submit">Submit</button>
         </form>
  </div>
  )
}
