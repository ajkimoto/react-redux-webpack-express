import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import '../styles/productCompare.scss';

export class ProductComponentStateful extends Component {
    static propTypes = {
        products: PropTypes.object
    };

    static defaultProps = {
        products: {}
    };

    constructor(props) {
        super(props);
    }

    render() {
        const productNodes = Object.entries(this.props.products)
            .map((product) => (
                <Product key={product[0]}>
                  prodInfo={product[1]}
                </Product>
            ));
        return <div className="productCompare"> {productNodes} </div>;
    }
}

function mapStateToProps(state) {
    const { products } = state;
    return { products };
}

export default connect(mapStateToProps, {})(ProductComponentStateful);
