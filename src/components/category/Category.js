import React, { Component} from 'react'
import { MDBBtn } from 'mdbreact';
import {connect} from 'react-redux';
import * as categoryActions from '../../store/actions/index';

class Category extends Component {
  
  componentDidMount(){
     
  }

  render() {
    let {categories} = this.props;
    return (
        <div>
            <h5>Categories</h5>
            {
              categories.map((value,index)=>{
                 return( 
                      <MDBBtn key={value.category_id} color="light-blue" className="mb-1" block>
                          {value.name}
                      </MDBBtn> 
                 )
              })
            }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      categories: state.categories.categories
  }
}

export default connect(mapStateToProps)(Category);
