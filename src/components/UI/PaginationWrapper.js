import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

const PaginationWrapper = () => {
  return ( 
        <MDBPagination className="mb-2 mt-2 justify-content-center">
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              1
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>2</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>3</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">&raquo;</span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
    )
}

export default PaginationWrapper;