import React from "react";

// css
import "./style.css";

// components
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

function Layout(props) {
  return (
    <>
      <Header />
      <Container>
        <div className="main py-3">{props.children}</div>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
