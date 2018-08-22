// basic react component starting template
import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import Button from './Button';
import '../styles/product.scss';
// import { connect } from 'react-redux';
// import {defaultFunction} from "../actions";
export default class ProductComponent extends Component {
    static propTypes = {
        children: PropTypes.array
    };

    static defaultProps = {
        children: {}
    };

    static showTooltip = (event, info) => {
        // const { heading, text } = info;
        console.log('info is', info);
        console.log(event.clientX, event.clientY); // eslint-ignore-line
    };
    render() {
        const productInfo = this.props.children[1];
        const bullets = productInfo.bullets.map((bullet, i) => {
            let curKey = productInfo.id + '-' + i;
            return <li key={curKey}>{bullet}</li>;
        });
        const buttonData = { text: 'Learn More' };
        return (
            <div className="product">
                <ReactTooltip multiline place="bottom" id={productInfo.id} effect="solid">
                  <p>
                      <span style={{fontWeight: 'bold'}}>{productInfo.tooltipHeading}</span><br />
                      <span>{productInfo.tooltipText}</span>
                  </p>
                </ReactTooltip>
                <h1>
                    {productInfo.name}
                </h1>
                <p className="productDesc">
                    {productInfo.info}
                  <span
                      ref="foo"
                      data-tip
                      data-for={productInfo.id}
                      className="product-info"
                  >
                  </span>
                </p>
                <ul>{bullets}</ul>
                <Button data={buttonData} />
            </div>
        );
    }
}
