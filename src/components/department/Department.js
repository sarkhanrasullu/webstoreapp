import React, { Component } from 'react'
import { MDBBtn} from 'mdbreact';
import DepartmentService from '../../services/DepartmentService';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class Department extends Component {

  componentDidMount(){
    this.props.onLoad();
  }
  
  render() {
    let {departments} = this.props;

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
    onDepartmentSelect: (departmentId) => dispatch(actions.loadCategories(departmentId)),
    onLoad: () => dispatch(actions.loadDepartments()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Department);