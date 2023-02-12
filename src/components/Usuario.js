import React from 'react'
import { memo } from 'react'

const Usuario = ({usuario}) => {
  return (
    <div>
        {usuario.nombre} - {usuario.email} 
    </div>
  )
}

export default memo(Usuario)