import React, { Component } from 'react'
import {Container, Col, Row} from 'react-bootstrap';
import PaginationWrapper from '../UI/PaginationWrapper';

export default class ProductList extends Component {
  render() {
    return (
        <Container fluid="true">
            <Row>
                <Col>
                      <PaginationWrapper/>
                </Col>
            </Row>
            <Row>
              <Col>Search panel</Col>
              <Col>
                  Product list
              </Col>
            </Row>
        </Container>
    )
  }
}
