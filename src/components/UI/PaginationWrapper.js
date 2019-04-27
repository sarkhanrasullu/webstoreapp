import React, { Component } from "react";
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import { connect } from "react-redux";

class PaginationWrapper extends Component {

    render(){
      let {count} = this.props;
      let rows = [];
      let index = 0;
      for(let i=0; i<count; i+=10){
          rows.push(
              <MDBPageItem key={i}>
                <MDBPageNav>
                  {++index}
                </MDBPageNav>
              </MDBPageItem>
          )
      }

      return ( 
            <MDBPagination className="mb-2 mt-2 justify-content-center">
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </MDBPageNav>
              </MDBPageItem>
              {rows}
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">&raquo;</span>
                </MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
        )
      }
}

const mapStateToProps = (state) => {
  console.log(state.products);
  return {
    count: state.products.count
  }
}


export default connect(mapStateToProps)(PaginationWrapper);