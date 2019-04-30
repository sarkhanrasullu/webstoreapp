import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact';
import AddtoCartButton from '../../UI/AddtoCartButton';
import { withRouter } from 'react-router-dom';
import commonAxios from '../../../services/CommonAxios';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';

 class ProductProperties extends Component {

  state = {
    attribute_values_list: []
  }
  componentDidMount(){
      const {product_id} = this.props.match.params;

      commonAxios.get('/attributes/inProduct/'+product_id)
                        .then(resp=>{
                            const attributeValues = resp.data;
                            const temp = {};

                            const set = new Set(attributeValues);
                            set.forEach(av=>{
                                const attrName = av["attribute_name"];
                                temp[attrName] = [];
                            })

                            attributeValues.forEach(av=>{
                                const attrName = av["attribute_name"];
                                temp[attrName].push(av);
                            })

                            var result = Object.keys(temp).map(function(key) {
                                var r = {key: key, attributeValues: temp[key]};
                                
                                return r;
                            });
                            this.setState({attribute_values_list:result});
                        })
                        .catch(error=>{
                            
                        }); 
  }

  render() {

    let attributeButtons = [];
    const {attribute_values_list} = this.state;
    
    if(attribute_values_list){
      console.log("attribute values="+JSON.stringify(attribute_values_list));
      attributeButtons =  attribute_values_list.map((attributeValuesWrapper, index)=>{
          const {attributeValues} = attributeValuesWrapper;
          const buttons = attributeValues.map((av, index) => {
            return (
                    <MDBBtn key={av.attribute_value_id} color="light z-depth-0">
                      {av.attribute_value}
                    </MDBBtn>
                  )
          })

          const result = (
            <MDBRow>
                <div>
                  <p className="h5">{attributeValuesWrapper.key}</p>
                  {buttons}
                </div>
            </MDBRow>
          );
         
          return result;
      })

    return (
      <MDBContainer>
          <MDBRow>
              <h5><strong>Gallic Glock</strong></h5>
          </MDBRow>
          <MDBRow>
            <div>
                <p className="card-price h2" style={{ color: "#f4425f" }}>
                <strong>16.99$</strong> <del className="h5" style={{ color: "#c6c4c4" }}>16.99$</del>
                </p>
            </div>
          </MDBRow>
          <MDBRow>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda veniam commodi, minus obcaecati rem impedit sit nisi explicabo suscipit aperiam harum eaque perferendis consequuntur omnis laborum dignissimos ex exercitationem.</p>
          </MDBRow>
          <MDBRow>
              <div>
            <p className="h5">Quantity</p>
            <MDBInput containerClass="mt-0" type="number" className="border border-light p-1 w-25 mt-0"/>
            </div>
          </MDBRow>

          {attributeButtons}
          <MDBRow>
                <AddtoCartButton/>
          </MDBRow>
      </MDBContainer>
    )
  }
}
 }



// const mapStateToProps = (state) => {
//   return {
//       departments: state.departments.departments
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDepartmentSelect: (departmentId) => {
//       dispatch(actions.loadCategories(departmentId));
//       dispatch(actions.loadProductsInDepartment(departmentId));
//     },
//     onLoad: () => dispatch(actions.loadDepartments()),
//     loadProductsInDepartment: (department_id) => {
//       dispatch(actions.loadProductsInDepartment(department_id));
//     },
//   }
// }
export default withRouter(ProductProperties);