import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'

export default class NavbarWrapper extends Component {
  render() {
    return (
        <Navbar bg="primary" expand="lg" className="mb-5">
          <Navbar.Brand href="/">SHOPMATE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/signin">Signin</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
  }
}
