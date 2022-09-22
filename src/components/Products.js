import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Products() {
    return (
        <div>
            <input type='search' placeholder='serch products' />
            <nav>
                <Link to='featured'>Featured</Link>&nbsp;&nbsp;&nbsp;
                <Link to='new'>New</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Products