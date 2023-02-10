import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './CartContext'

const ItemDetail = ({title,image,price,description}) => {

    const [goToCart,setgGoToCart] = useState(false);
    const {addProduct} = useCartContext(); //Solo quiero la funcion addProduct del cartContext

    const onAdd = (cantidad) => {
       
        setgGoToCart(true);
        addProduct(title,image,price,description,cantidad);
    }
  return (
    <div className='detail-container'>
        <img src={image}/>
        <div className="detail-container__detalles">
            <h1>{title}</h1>
            <span>${price}</span>
            <p>{description}</p>
            {
                goToCart
                ? <Link to="/cart">Terminar compra </Link> /*Al hacer click en confirmar, me lleva a otro boton de terminar compra y me lleva al carrito*/
            : <ItemCount stock={5} onAdd={onAdd}/>
           }
        </div>
    </div>
  )
}

export default ItemDetail