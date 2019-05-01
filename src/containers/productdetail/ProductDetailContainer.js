import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCard, MDBInput, MDBBtn } from 'mdbreact';
import ProductImages from '../../components/productdetail/productimages/ProductImages';
import AddtoCartButton from '../../components/UI/AddtoCartButton';
import { withRouter } from 'react-router-dom';
import commonAxios from '../../services/CommonAxios';

class ProductDetailContainer extends Component {

  state = {
    info:{},
    quantity:1,
    attribute_values_list: [],
    selectedAttributes:[]
  }

  setAttribute = function(attributeValueIds,attributeId){
    let prevAttrbs = [...this.state.selectedAttributes];

    prevAttrbs = prevAttrbs.filter( function( el ) {
      return attributeValueIds.indexOf( el ) < 0;
    } );

    const index = prevAttrbs.indexOf(attributeId);
    if(index>-1){
      prevAttrbs.splice(index, 1);
    }else{
      prevAttrbs.push(attributeId);
    }
    this.setState({selectedAttributes: prevAttrbs});
  }

  existAttr = function(attributeId){
    let attrs = [...this.state.selectedAttributes];
    return attrs.includes(attributeId);
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

                        commonAxios.get('/products/'+product_id)
                        .then(resp=>{
                            this.setState({info:resp.data});
                        })
                        .catch(error=>{
                            
                        }); 
  }


  getAttributeButtons = function() {
    let attributeButtons = [];
    const {attribute_values_list, info} = this.state;
    
    if(attribute_values_list){
      attributeButtons =  attribute_values_list.map((attributeValuesWrapper, index)=>{
          const {attributeValues} = attributeValuesWrapper;
          const attributeValuesInt = attributeValues.map((val)=>{
            return val.attribute_value_id;
          })
          const buttons = attributeValues.map((av, index) => {
            const clr = this.existAttr(av.attribute_value_id) ? "default":"light";
            return (
                    <MDBBtn key={av.attribute_value_id} onClick={()=>this.setAttribute(attributeValuesInt,av.attribute_value_id)} color={clr} className="z-depth-0">
                      {av.attribute_value}
                    </MDBBtn>
                  )
          })

          const result = (
            <MDBRow key={index}>
                <div>
                  <p className="h5">{attributeValuesWrapper.key}</p>
                  <div>
                  {buttons}
                  </div>
                </div>
            </MDBRow>
          );
         
          return result;
      })
  }
  return attributeButtons;
  }

  onQuantityChange = (value)=>{
    if(value>0) 
        this.setState({quantity:value})
  }

  getPropertiesPage = function(){
    const attributeButtons = this.getAttributeButtons();
    const {info} = this.state;
    const quantityInput = (
      <MDBInput 
                      containerClass="mt-0" 
                      value={this.state.quantity+""} 
                      getValue={this.onQuantityChange} 
                      type="number" 
                      className={"border border-light p-1 w-25 mt-0"}/>
    )
    return (
      <MDBContainer>
          <MDBRow>
              <h5><strong>{info.name}</strong></h5>
          </MDBRow>
          <MDBRow>
              <div>
                  <p className="card-price h2" style={{ color: "#f4425f" }}>
                  <strong className="mr-1">{info.price}</strong> 
                  <del className="h5" style={{ color: "#c6c4c4" }}>
                  {info.discounted_price}
                  </del>
                  </p>
              </div>
          </MDBRow>
          <MDBRow>
              <p>{info.description}</p>
          </MDBRow>
          <MDBRow>
              <div>
              <p className="h5">Quantity</p>
              {quantityInput}
              </div>
          </MDBRow>
          {attributeButtons}
          <MDBRow>
                  <AddtoCartButton/>
          </MDBRow>
        </MDBContainer>                  
      )
  }

    render() {
      const {info} = this.state;
      return (
        <MDBContainer fluid={true}>
          <MDBCard bg="light" className="mt-3 border border-light z-depth-0">
            <MDBCardBody>  
                    <MDBRow>
                        <MDBCol xs="4" sm="4"  md="7" lg="4" xl="4" >
                            <ProductImages images={["/product_images/"+info.image,"/product_images/"+info.image_2]}/>
                        </MDBCol>
                        <MDBCol >
                          {this.getPropertiesPage()}       
                        </MDBCol>
                    </MDBRow> 
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      )
    }
}

export default withRouter(ProductDetailContainer)