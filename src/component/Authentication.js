import React, { useContext, useState } from 'react'
const Authcontext=React.createContext(null)
export const Auth = ({children}) => {
    const [user,setUser]=useState(null) 
    const Login=(user)=>{
         setUser(user)
    }
    const Logout=()=>{
        setUser(null)
    }
  return (
    <div>
        <Authcontext.Provider value={{user,Login,Logout}}>
            {children}
        </Authcontext.Provider>
    </div>
   
    
    export const useAuth = () => {
      return useContext(Authcontext)
    }
    
  )
}
