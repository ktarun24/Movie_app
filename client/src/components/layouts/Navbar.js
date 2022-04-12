import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <NavbarContainer>
      <Navbar expand="lg" className="mak">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/welcome">
              Home
            </Link>
          </Nav>

          <Nav>
            <Link className="nav-link" to="/Signin">
              Login
            </Link>
            <Link className="nav-link" to="/Signup">
              Signup
            </Link>
            <Link className="nav-link" to="/welcome">
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarContainer>
  );
};

export default NavBar;
//main navbar container
const NavbarContainer = styled.div`
  background: var(--blue);
  .nav-link {
    color: #fff !important;
    &:hover {
      background: var(--light-blue);
    }
  }
`;
