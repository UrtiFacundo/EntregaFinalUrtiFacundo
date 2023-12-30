import React from 'react'
import { useParams } from 'react-router-dom'

const CascosId = () => {
    const {id} = useParams();
  return (
    <div>
<h3>Producto correspondiente al id {id}</h3>
    </div>
  )
}

export default CascosId