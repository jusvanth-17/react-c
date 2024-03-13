import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Home = () => {
  const Navigate=useNavigate()
  return (
    <div>
        Home
        <button onClick={()=>Navigate('/products')}>Clickme</button>
    </div>
  )
}
