import React from 'react'
import {Link} from "react-router-dom"


const Item = ({producto}) => {
    return( 
        <article className="product-card" key={producto.id}>
            <img className="product-card__image" src={producto.image} alt={producto.title}/> 
            <h3>{producto.title}</h3>
            <p>{"$" + producto.price}</p>

            <Link to={"/item/" + producto.id}>Ver Mas</Link>

        </article>
    )

}

export default Item