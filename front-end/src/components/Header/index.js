import React from "react";

// css
import "./style.css";

// bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

// router
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand
            className="cursor-pointer"
            onClick={() => history.push("/")}
          >
            ProShop
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => history.push("/cart")}>
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/login")}>
                <i className="fas fa-user"></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
