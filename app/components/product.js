// basic react component starting template
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/product.css';
import { connect } from 'react-redux';
import {defaultFunction} from "../actions";
export default class ProductComponent extends Component {
  static propTypes = {
    productInfo: PropTypes.object
  };

  static defaultProps = {
    productInfo: {}
  };

  render() {
    const productInfo = this.props.children[1];
    const bullets = productInfo.bullets.map((bullet) => {
      return <li>{bullet}</li>
    });
    return (
      <div className="product">
        <h1>
          {productInfo.name}
        </h1>
        <p className="productDesc">{productInfo.info}</p>
        <ul>{bullets}</ul>
      </div>
    );
  }
}