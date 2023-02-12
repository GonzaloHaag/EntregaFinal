import React from 'react'
import { memo } from 'react'
import Usuario from "./Usuario"

const UsuariosList = ({usuarios}) => {
  return (
    <div>
        {usuarios.map((usuario,i)=>{
            return <Usuario key={i} usuario={usuario}/>
        })}
    </div>
  )
}

export default memo(UsuariosList)