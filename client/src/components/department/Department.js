import React, { Component } from 'react'
import { MDBBtn} from 'mdbreact';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class Department extends Component {

  componentDidMount(){
    this.props.onLoad();
  }
  
  render() {
    let {departments} = this.props;
    if(departments && departments[0]){
      this.props.loadProductsInDepartment(departments[0].department_id);
    }
    return (
        <div>
            <h5>Departments</h5>
            {
              departments.map((value,index)=>{
                return( 
                    <MDBBtn 
                      key={value.department_id} 
                      color="light-blue" 
                      className="mb-1" 
                      block
                      onClick={()=>this.props.onDepartmentSelect(value.department_id)}
                    >
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
      departments: state.departments.departments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDepartmentSelect: (departmentId) => {
      dispatch(actions.loadCategories(departmentId));
      dispatch(actions.loadProductsInDepartment(departmentId));
    },
    onLoad: () => dispatch(actions.loadDepartments()),
    loadProductsInDepartment: (department_id) => {
      dispatch(actions.loadProductsInDepartment(department_id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Department);