import React from 'react'

import { useCartContext } from './CartContext'

import { Link } from 'react-router-dom';

const Carrito = () => {

  const {carrito,totalPrice} = useCartContext();

  if(carrito.lenght===0){
    return (
      <>
      <p>No hay elementos en el carrito</p>
      <Link to="/">Realizar una compra</Link>
      </>
    )
  }
  return (
    <div>Carrito</div>
  )
}

export default Carrito