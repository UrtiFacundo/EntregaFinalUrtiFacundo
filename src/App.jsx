import ItemListContainer from './components/ItemListContainer';
import './App.css';
import NavBar from './components/NavBar';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartWidget from './components/CartWidget';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';

function App() {
  

  return (
    <>
      <div className="App">
        <BrowserRouter>
        <NavBar></NavBar>
        
        <Routes>
      <Route path= '/' element= {<ItemListContainer greeting='Novedades'/>} />
      <Route path= '/Productos' element= {<Productos/>} />
      <Route path= '/Nosotros' element= {<Nosotros/>} />  
      <Route path= '/cart' element= {<CartWidget/>} /> 
        </Routes>
        </BrowserRouter>
        </div>
    </>
 );
}

export default App
