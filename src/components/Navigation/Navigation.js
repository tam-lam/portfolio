import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
function Navigation() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}
export default Navigation;
