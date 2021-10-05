import React from 'react';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (

<header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <LinkContainer to='/'>
          <Navbar.Brand href="#home" className="text-left">Saad's Stores</Navbar.Brand>

          </LinkContainer>      

                <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to='/Desp'>
                        <Nav.Link href="#features">Descriptions</Nav.Link>

                </LinkContainer>
                <LinkContainer to='/Pricing'>
      <Nav.Link >Pricing</Nav.Link>

                </LinkContainer>
      <NavDropdown title="Gender" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Child</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Mens</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
              <Nav>
                <LinkContainer to='/cart'>
                        <Nav.Link >Cart</Nav.Link>

                </LinkContainer>
                <LinkContainer to='/login'>
      <Nav.Link eventKey={2} > Sign-In
      </Nav.Link>

                </LinkContainer>
        
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</header>        )
}

export default Header
