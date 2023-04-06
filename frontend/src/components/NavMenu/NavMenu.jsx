import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import bmaBlack from "../../assets/BMA SimplyLogo.png";
import "./navmenu.css";

function NavMenu() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    console.info("handleClick called");
    setShow(false);
  };

  return (
    <>
      <Navbar expand="lg" className="mb-3 d-none d-lg-block">
        <Container fluid>
          <Navbar.Brand>
          <Link to="/"><img src={bmaBlack} alt="Logo" className="logo" /></Link>
          </Navbar.Brand>
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="ms-auto justify-content-end">
              <Link to="/" className="nav-link" onClick={handleClick}>
                Home
              </Link>
              <Link to="/signin" className="nav-link" onClick={handleClick}>
                Sign In
              </Link>
              <Link to="/search" className="nav-link" onClick={handleClick}>
                Athlete
              </Link>
              <Link to="/contact" className="nav-link" onClick={handleClick}>
                Contact Us
              </Link>
              <Link to="/community" className="nav-link" onClick={handleClick}>
                Community Page
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg" className="mb-3 d-lg-none">
        <Container fluid>
          <Navbar.Brand>
          <Link to="/"><img src={bmaBlack} alt="Logo" className="logo" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShow(true)}
          />
          <Offcanvas
            show={show}
            onHide={() => setShow(false)}
            placement="end"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img
                  src={bmaBlack}
                  alt="Logo"
                  className="img-fluid img-thumbnail"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Link to="/" className="nav-link text-reset" onClick={handleClick}>
                  Home
                </Link>
                <Link to="/signin" className="nav-link text-reset" onClick={handleClick}>
                  Sign In
                </Link>
                <Link to="/search" className="nav-link text-reset" onClick={handleClick}>
                  Athlete
                </Link>
                <Link to="/contact" className="nav-link text-reset" onClick={handleClick}>
                  Contact Us
                </Link>
                <Link
                  to="/community"
                  className="nav-link text-reset"
                  onClick={handleClick}
                >
                  Community Page
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;
