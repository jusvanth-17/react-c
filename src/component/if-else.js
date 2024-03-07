import React, { useState } from 'react'

export default function LifeCycle() {
 
    const[isLoggedin,setIsloggedin]=useState(false);
    const[Admin,setIsAdmin]=useState(true);
        if(isLoggedin)
        {
            return <h1>Welcome quest</h1>
        }
        else{   
            return <h1>Wlcome Admin</h1>
        }
    
}
