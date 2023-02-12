import React from 'react'
import { useCartContext } from './CartContext'

const ItemCart = ({product}) => {

    const {removeProduct} = useCartContext();
  return (
    <div className='itemCart'>
        <img src={product.image}/>
        <div>
            <p className='itemCart__title'>Titulo:{product.title}</p>
            <p className='itemCart__cantidad'>Cantidad:{product.cantidad}</p>
            <span className='itemCart__precio'>Precio: ${product.price}</span>
            <p className='itemCart__subtotal'>Subtotal: ${product.cantidad * product.price} </p>
            <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart