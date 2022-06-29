import React from "react";
import logo from "../logo.svg";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">about</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
