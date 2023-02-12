import React from 'react'
import { useCartContext } from './CartContext'

const CartWidget = () => {
  const {cartCantidad} = useCartContext();
  return (
    <div>
    <i className="bi bi-cart-check"></i>
    <span>{cartCantidad()}</span>
    </div>
  )
}

export default CartWidget