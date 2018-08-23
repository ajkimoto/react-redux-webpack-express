import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import ReactTooltip from 'react-tooltip';
import Button from './Button';
import '../styles/product.scss';
export default class ProductComponent extends Component {
    static propTypes = {
        children: PropTypes.array
    };

    static defaultProps = {
        children: {}
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
                        <span style={{fontWeight: 'bold'}}>{productInfo.tooltipHeading}</span>
                        <br />
                        <br/>
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
                      onClick={() => { ReactTooltip.show(findDOMNode(this.refs.foo));}}
                  >
                  </span>
                </p>
                <ul>{bullets}</ul>
                <Button data={buttonData} />
            </div>
        );
    }
}
