import React from 'react'
import { useCartContext } from './CartContext'

const ItemCart = ({product}) => {

    const {removeProduct} = useCartContext();
  return (
    <div className='itemCart'>
        <img src={product.image}/>
        <div>
            <p>Titulo:{product.title}</p>
            <p>Cantidad:{product.cantidad}</p>
            <span>Precio: ${product.price}</span>
            <p>Subtotal: ${product.cantidad * product.price} </p>
            <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart