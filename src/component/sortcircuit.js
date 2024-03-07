
 
import React, { useState } from 'react'

export default function LifeCycle() {
 
    const[isLoggedin,setIsloggedin]=useState(false);
    const[Admin,setIsAdmin]=useState(true);
       
    //  4.sort circuit
        
     return (<div>{isLoggedin && <h1>User</h1>}</div>)
}