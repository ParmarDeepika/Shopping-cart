import {Button, Container,Nav,Navbar as Navbarbs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
export function Navbar(){
  const {openCart, cartQuantity} =useShoppingCart();
    return (<Navbarbs sticky ="top" className="bg-white shadow-lg mb-20">
        <Container >
           <Nav className="me-auto"> 
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
           </Nav>{
            cartQuantity >0 && (<Button size="sm" variant="outline-primary" className="rounded-circle" onClick={openCart}> 
            <img src= "./src/assets/Shopping-cart.png" />
            <div style={{width:'25px' ,height:'25px',color:"white",bottom:0,left:20,position: "relative"}} 
            className="rounded-circle bg-danger d-flex justify-content-center align-itms-center">
              {cartQuantity}</div>
          </Button>)
           }
          
        </Container>
    </Navbarbs>)
}