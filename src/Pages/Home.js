import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



function Home() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
    <Container>
            <Navbar.Brand href="/"><h1>Nikkosoft</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/servicios/">Servicios</Nav.Link>
                    <Nav.Link href="/productos/">Productos</Nav.Link>
                    <Nav.Link href="/profitplus/">Profit Plus</Nav.Link>
                    <Nav.Link href="/nikkoapps/">Nikko Apps</Nav.Link>
                    <Nav.Link href="/contacto/">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
  </Container>
</Navbar> 
  )
}

export default Home