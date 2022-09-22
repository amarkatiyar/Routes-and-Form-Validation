import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <NavLink to='/'>Chidl2</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to='/buttondemo'>ButtonDemo</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to='/products'>Products</NavLink>
        </nav>
    </div>
  )
}

export default Navbar