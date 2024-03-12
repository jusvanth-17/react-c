import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className='nav-bar'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
  </div>
  )
}
