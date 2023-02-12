import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navBar-container'>
        <nav className='nav'>
            <div className='nav__brand'>
                <NavLink className="nav__link" to="/">NBA STORE</NavLink>
            </div>
            <ul>
        <li>
        <NavLink className="navbar__link" to="/categories/Remeras">Remeras</NavLink>
        </li>
        <li>
        <NavLink className="navbar__link" to="/categories/Shorts">Shorts</NavLink>
        </li>
        <li>
        <NavLink className="navbar__link" to="/categories/Pantalones">Pantalones</NavLink>
        </li>
        <li>
            <NavLink className="navbar__link" to="/cart">
                <CartWidget/>
            </NavLink>

        </li>
    </ul>
</nav>
    </div>
  )
}

export default Navbar