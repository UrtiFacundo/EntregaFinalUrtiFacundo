import Container from 'react-bootstrap/Container';
import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../components/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
      <Navbar className='Nav' bg="#ccb7c9" data-bs-theme="#ccb7c9">
        <Container >
          <Link to="/"><img src="https://acdn.mitiendanube.com/stores/940/460/products/353-matt-black-11-a54b9f5182be880f8815577353861140-640-0.webp" alt="Casco" width={80}/>
 </Link>
          <Nav className="me-auto">
            <Link to="/" className='pestaña'>Home</Link>
            <Link to="/categoria/cascos"className='pestaña'>Cascos</Link>
            <Link to="/categoria/guantes"className='pestaña'>Guantes</Link>
            <Link to="/CartWidget"><CartWidget/></Link>
          </Nav>
        </Container>
      </Navbar>
    
      );
}

export default NavBar;