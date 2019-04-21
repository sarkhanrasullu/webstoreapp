import React, { Component } from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

export default class DropDownList extends Component {
  render() {
    const items = this.props.items;
    const dropDown = (
      <MDBDropdown>
        <MDBDropdownToggle caret color="info">
          {items[0]}
        </MDBDropdownToggle>
        <MDBDropdownMenu color="info" basic>
          {items.map((value, index) => {
            return <MDBDropdownItem key={index}>{value}</MDBDropdownItem>;
          })}
        </MDBDropdownMenu>
      </MDBDropdown>
    );
    return dropDown;
  }
}
