import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navBar-container'>
        <nav className='nav'>
            <div className='nav__brand'>
                <NavLink className="nav__link" to="/">Mi Marca</NavLink>
            </div>
            <ul>
        <li>
        <NavLink className="navbar__link" to="/categoria/Remeras">Remeras</NavLink>
        </li>
        <li>
        <NavLink className="navbar__link" to="/categoria/Shorts">Shorts</NavLink>
        </li>
        <li>
        <NavLink className="navbar__link" to="/categoria/Pantalones">Pantalones</NavLink>
        </li>
        <li>
            <NavLink className="navbar__link" to="/carrito">
                <CartWidget/>
            </NavLink>

        </li>
    </ul>
</nav>
    </div>
  )
}

export default Navbar