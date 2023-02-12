import React from 'react'

import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'

const ItemDetail = ({id,title,price,image,description}) => {

    const [goToCart,setgGoToCart] = useState(false);
    const {addProduct} = useCartContext(); 

    const onAdd = (cantidad) => {
       
        setgGoToCart(true);
       let item = {
        id,
        title,
        image,
        price,
        description
       }
       addProduct(item,cantidad)
    }
  return (
    <div className='detail-container'>
        <img src={image}/>
        <div className="detail-container__detalles">
            <h1>{title}</h1>
            <span>${price}</span>
            <p>{description}</p>
            
           
            { goToCart
                 ? <div className='buttons'>
                 <Link className='terminarCompra' to="/cart">Ir al carrito</Link>
                 <Link className='seguirComprando' to="/">Seguir comprando</Link>
                 </div>
             : <ItemCount onAdd={onAdd}/> 
            
             }
          
           
        </div>
    </div>
  )
}

export default ItemDetail