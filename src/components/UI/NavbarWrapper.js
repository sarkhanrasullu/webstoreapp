import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import ModalWrapper from "./ModalWrapper";
import LoginFormWrapper from "../loginForm/LoginFormWrapper";

class NavbarWrapper extends Component {
state = {
  isOpen: false,
  loginModal: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

toggleLogin = () => {
  this.setState({
    loginModal: !this.state.loginModal
  });
}

render() {
  return (
      <React.Fragment>
          <MDBNavbar style={{backgroundColor: '#82b1ff'}} dark expand="md">
            <MDBNavbarBrand>
                  <MDBNavLink to="#!">
                      <strong className="white-text">SHOPMATE</strong>
                  </MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="#login" onClick={this.toggleLogin}>LOGIN/SIGNUP</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <ModalWrapper 
            show={this.state.loginModal} 
            toggle={this.toggleLogin} 
            modalBody={<LoginFormWrapper/>}
            modalSize="md"
            />
      </React.Fragment>
    );
  }
}

export default NavbarWrapper;