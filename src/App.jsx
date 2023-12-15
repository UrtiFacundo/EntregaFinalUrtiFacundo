import ItemListContainer from './components/ItemListContainer';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  

  return (
    
      <div className="App">
        <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path={'/'} element={ <ItemListContainer /> } />
          <Route path={'/categoria/:id'} element={ <ItemListContainer /> } />
          <Route path={'/item/:id'} element={ <ItemDetailContainer /> } />
          

        </Routes>
        </BrowserRouter>
        </div>
 );
}

export default App;
