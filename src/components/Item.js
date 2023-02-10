import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { CartContext } from './CartContext'

const Item = ({producto}) => {
    return( //En cada vuelta del .map me va a retornar esto
        <article className="product-container" key={producto.id}>
            <img className="product-card__image" src={producto.image} alt={producto.title}/> {/*Genera imagenes randoms*/}
            <h3>{producto.title}</h3>
            <p>{"$" + producto.price}</p>

            <Link to={"/item/" + producto.id}>Ver Mas</Link>{/*Es como un href*/}

        </article>
    )

}

export default Item