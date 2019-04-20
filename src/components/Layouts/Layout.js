import React, { Component } from 'react'
import NavbarWrapper from '../UI/NavbarWrapper';


export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
          <NavbarWrapper/>
          {this.props.children}
      </React.Fragment>
    )
  }
}
