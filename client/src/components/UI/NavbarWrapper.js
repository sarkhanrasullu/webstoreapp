import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import ModalWrapper from "./ModalWrapper";
import LoginFormWrapper from "../loginForm/LoginFormWrapper";
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

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

componentDidUpdate(){
  if(this.props.user && this.state.loginModal){
    this.setState({loginModal:false});
  }
}

render() {
  let l =  null;

  if(this.props.user) {
      l =   <MDBNavLink to="#logout" onClick={this.props.logout}>
                {"Logout ("+this.props.user.customer.schema.email+")"}
            </MDBNavLink>;
  }else {
    l = <MDBNavLink to="#login" onClick={this.toggleLogin}>LOGIN/SIGNUP</MDBNavLink>;
  }
  
  return (
      <React.Fragment>
          <MDBNavbar style={{backgroundColor: '#82b1ff'}} dark expand="md">
            <MDBNavbarBrand>
                  <MDBNavLink to="/">
                      <strong className="white-text">SHOPMATE</strong>
                  </MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  {l}
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

const mapStateToProps = (state) => {
  return {
    user: state.customers.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarWrapper);