import React from 'react'
import Item from '../Item/Item'

const ItemList = (props) => {
  console.log(props);
  const { item } = props;
  return (
    <div className='row'>
        {item.map(products =>
            <div className= 'col-md-3' key={products.id}>
                 <Item item={products}/>

            </div>
            )}
    </div>
  )
}

export default ItemList