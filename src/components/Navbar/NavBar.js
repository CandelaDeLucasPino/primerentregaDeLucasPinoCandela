import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCart from '../Shoppingcart';
import "./Navbar.css";

function NavBar() {
        return (

            <Navbar className="barra">
                <Container className='container'>
                    <Navbar.Brand className="logo" href="#home">
                    <img
                        src="/logo3.jpg"
                        width="300"
                        height="150"
                        className="d-inline-block align-top"
                        alt="logo"
                        />
                    </Navbar.Brand>
                    <Nav className="nav">
                        <Nav.Link href="#Sale">Sale
                        </Nav.Link>
                        <Nav.Link href="#NewSeason">New Season</Nav.Link>
                        <Nav.Link href="#Shop"><ShoppingCart/></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        
        );
    }

export default NavBar;