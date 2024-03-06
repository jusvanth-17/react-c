import React, { useState } from 'react'

export const Moneyconversion = () => {
    const[usd,setUsd]=useState(0);
    const[inr,setInr]=useState(0);

    const handleusd=(j)=>{
        setInr(j.target.value);
        setUsd(j.target.value/82.90);

    }
    const handleinr=(j)=>{
        setUsd(j.target.value); 
        setInr(j.target.value*82.90);  
    }   
    
  return (
    <div>
        <label>INR</label>
      <input type="number" value={usd} onChange={handleinr} /><br></br>
      <label>USD</label>
      <input type="number" value={inr} onChange={handleusd} />
    </div>
  )
}

