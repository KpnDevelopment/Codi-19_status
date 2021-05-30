import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.png";

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            style={{ justifyContent: "center", alignItems: "center" }}
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          <span style={{ fontSize: "25px", textTransform: "uppercase" }}>
            Covid Status
          </span>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Navigation;
