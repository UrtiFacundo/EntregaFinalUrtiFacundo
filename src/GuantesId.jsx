import React from 'react'
import { useParams } from 'react-router-dom'

const GuantesId = () => {
    const {id} = useParams();
  return (
    <div>
        <h3>Producto correspondiente al id {id}</h3>
    </div>
  )
}

export default GuantesId