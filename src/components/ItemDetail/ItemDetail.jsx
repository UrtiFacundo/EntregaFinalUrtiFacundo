import React from 'react'


const ItemDetail = ({item}) => {
  return (
    <div className= 'card'>
     <div className='col-md-4 offset-md-4'>
     <img src={item.img} className='img-fluid' alt={item.title}/></div>
     <h3>{item.title}</h3>
     <p>{item.description}</p>
     <p>$ {item.price}</p>
     <p>Cantidad: {item.stock}</p>
    </div>
  )
}

export default ItemDetail