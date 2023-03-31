<<<<<<< HEAD
import React from "react";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import bmaBlack from "../../assets/BMA Black.png";

function NavMenu() {
=======
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import bmaBlack from '../../assets/BMA Black.png';

const NavMenu = () => {
  const [show, setShow] = useState(false);

>>>>>>> 16e01fcdb82fd3fcbfd3232a10e6cde398fcf1d3
  const handleClick = () => {
    console.log('handleClick called');
    setShow(false);
  };
<<<<<<< HEAD
  const marginBurger = () => {
    return window.innerWidth < 992 ? "my-3" : "";
  };
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand>
              <img src={bmaBlack} alt="Logo" className="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={bmaBlack}
                    alt="Logo"
                    className="img-fluid img-thumbnail"
                  />
                  Boost My Athlete
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link
                    to="/"
                    className={`text-decoration-none px-3 text-reset ${marginBurger()}`}
                    onClick={handleClick}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    to="/signin"
                    className={`text-decoration-none px-3 text-reset ${marginBurger()}`}
                    onClick={handleClick}
                  >
                    <li>Sign In</li>
                  </Link>
                  <Link
                    to="/search"
                    className={`text-decoration-none px-3 text-reset ${marginBurger()}`}
                    onClick={handleClick}
                  >
                    <li>Athlete</li>
                  </Link>
                  <Link
                    to="/contact"
                    className={`text-decoration-none px-3 text-reset ${marginBurger()}`}
                    onClick={handleClick}
                  >
                    <li>Contact Us</li>
                  </Link>
                  <Link
                    to="/community"
                    className={`text-decoration-none px-3 text-reset ${marginBurger()}`}
                    onClick={handleClick}
                  >
                    <li>Community Page</li>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
=======

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3 d-none d-lg-block">
        <Container fluid>
          <Navbar.Brand><img src={bmaBlack} alt="Logo" className=""/></Navbar.Brand>
          <Navbar.Collapse id="navbar-nav" className='justify-content-end'>
            <Nav className="ms-auto justify-content-end">
              <Link to="/" className="nav-link" onClick={handleClick}>Home</Link>
              <Link to="/signin" className="nav-link" onClick={handleClick}>Sign In</Link>
              <Link to="/search" className="nav-link" onClick={handleClick}>Athlete</Link>
              <Link to="/contact" className="nav-link" onClick={handleClick}>Contact Us</Link>
              <Link to="/community" className="nav-link" onClick={handleClick}>Community Page</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg" className="mb-3 d-lg-none">
        <Container fluid>
          <Navbar.Brand><img src={bmaBlack} alt="Logo" className=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShow(true)} />
          <Offcanvas show={show} onHide={() => setShow(false)} placement="end" aria-labelledby="offcanvasNavbarLabel">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={bmaBlack} alt="Logo" className='img-fluid img-thumbnail'/>
                Boost My Athlete
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Link to="/" className="nav-link" onClick={handleClick}>Home</Link>
                <Link to="/signin" className="nav-link" onClick={handleClick}>Sign In</Link>
                <Link to="/search" className="nav-link" onClick={handleClick}>Athlete</Link>
                <Link to="/contact" className="nav-link" onClick={handleClick}>Contact Us</Link>
                <Link to="/community" className="nav-link" onClick={handleClick}>Community Page</Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

>>>>>>> 16e01fcdb82fd3fcbfd3232a10e6cde398fcf1d3
export default NavMenu;
