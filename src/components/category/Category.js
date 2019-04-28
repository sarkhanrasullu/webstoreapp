import React, { Component} from 'react'
import { MDBBtn } from 'mdbreact';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Category extends Component {
  
  componentDidMount(){
     
  }

  render() {
    let {categories} = this.props;
    let title = null;
    if(categories && categories.length>0){
      title = <h5>Categories</h5>
    }

    let body = [];
    categories.map((value,index)=>{
      body.push( 
           <MDBBtn key={value.category_id} color="light-blue" className="mb-1" block
           onClick={()=>this.props.onCategorySelect(value.category_id)}>
               {value.name}
           </MDBBtn> 
      )
   })
    return (
        <div>
            { title }
            { body }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      categories: state.categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCategorySelect: (category_id) => {
      dispatch(actions.loadProductsInCategory(category_id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
