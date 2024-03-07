
 
import React, { useState } from 'react'

export default function LifeCycle() {
 
    const[isLoggedin,setIsloggedin]=useState(false);
    const[Admin,setIsAdmin]=useState(true);
       
    
 // 3. Ternary Operator

    return isLoggedin?(<div><h1>Welcome User</h1></div>):(<div><h1>Welcome Admin</h1></div>)
}
    