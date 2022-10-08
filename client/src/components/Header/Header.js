import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="info" expand="lg" variant='dark'>
      <Container fluid="lg">
      <Navbar.Brand href="#home">
            <img
              src="https://cdn.discordapp.com/attachments/1004398550152659047/1028312489986900029/ELW_2-removebg-preview.png"
              width="40"    
              height="40"
              className="d-inline-block align-top"
              alt="Miwamew"
            />
        </Navbar.Brand>
        <Navbar.Brand href="#">ELW</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Robots</Nav.Link>

            <NavDropdown title="Arduino" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sensor</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Motor/Servo</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Module</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Other</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Micro:Bit" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action4">Sensor</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Motor/Servo</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Module</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header