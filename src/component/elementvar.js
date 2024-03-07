
import React, { useState } from 'react'

export default function LifeCycle() {
 
    const[isLoggedin,setIsloggedin]=useState(false);
    const[Admin,setIsAdmin]=useState(true);
       
    

// 2.Element  Variable
    let html;
    if(Admin){
        html=<h1>you are Admin</h1>
    }
    return html
}
