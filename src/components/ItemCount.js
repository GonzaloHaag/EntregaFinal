import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const ItemCount = ({stock,onAdd}) => {

    const [contador,setContador] = useState(1);

    const increase = () => {
        setContador(contador + 1);
    }
    const decrease = () => {
        setContador(contador - 1)
    }



    return(
    <div className='counter-container'>
        <button disabled={contador <= 1} onClick={decrease}>-</button>
        <span>{contador}</span>
        <button disabled={contador >=stock} onClick={increase}>+</button>
        <div>
         <button disabled={stock <= 0} onClick={()=> onAdd(contador)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount