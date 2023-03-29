import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';

const NavMenu = () => {
  return (
      <>
        {['lg'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand>Boost My Athlete</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Boost My Athlete
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link to="/" className='text-decoration-none text-reset px-3'><li >Home</li></Link>
                    <Link to="/signin" className='text-decoration-none text-reset px-3'><li >Sign In</li></Link>
                    <Link to="/search" className='text-decoration-none text-reset px-3'><li >Athlete</li></Link>
                    <Link to="/contact" className='text-decoration-none text-reset px-3'><li>Contact Us</li></Link>
                    <Link to="/community" className='text-decoration-none text-reset px-3'><li>Community Page</li></Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
export default NavMenu
