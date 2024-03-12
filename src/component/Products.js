import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <div>
        <Link to='mostviewed'>mostviewed</Link>
        <Link to='new'>New</Link>
        <Outlet/>
    </div>
  )
}
