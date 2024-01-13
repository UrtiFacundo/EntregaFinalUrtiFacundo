import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore';
import ItemList from './ItemList/ItemList'




const ItemListContainer = () => {

  const [item, setItem] = useState ([])
  const {id} = useParams ();

useEffect(()=>{
 const queryDb = getFirestore ();
 const queryCollection = collection(queryDb, 'Products');
 if(id){
  const queryFilter = query(queryCollection, where('categoryId', '==', id));
  getDocs(queryFilter).then((res)=> {
    const items = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setItem(items);
  });
 }else{
  getDocs(queryCollection).then((res) => {
    const items = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setItem(items);
  });
  
}
}, [id])


  return (
    <div className= 'container'>
      <div className='row'>
        <ItemList item={item}/>

      </div>
    </div>
  )
}

export default ItemListContainer