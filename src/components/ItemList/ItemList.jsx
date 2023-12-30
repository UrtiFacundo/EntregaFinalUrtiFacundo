import React from 'react'
import Item from '../Item/Item'

const ItemList = (props) => {
  console.log(props);
  const { item } = props;
  return (
    <div className='row'>
        {item.map(item =>
            <div className= 'col-md-3' key={item.id}>
                 <Item item={item}/>

            </div>
            )}
    </div>
  )
}

export default ItemList