import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ itemCount }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">
            <FaShoppingCart />
            <span className="ml-1">Carrito</span>
            <Badge variant="secondary" className="ml-1">
              {itemCount}
            </Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CartWidget;
