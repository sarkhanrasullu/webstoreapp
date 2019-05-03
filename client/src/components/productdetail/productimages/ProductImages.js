import React, { Component } from 'react'
import Gallery from 'react-amazon-gallery';
import './productimages.css';

export default class ProductImages extends Component {
  render() {
    return (
      <div className="galleryPreview">
           <Gallery images={this.props.images} />
      </div>
    )
  }
}
