import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { Component } from "react";
function Navigation() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Link</Nav.Link>
          <Nav.Link href="#pricing">Link</Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}
export default Navigation;
