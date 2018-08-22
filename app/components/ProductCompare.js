import React, { PropTypes } from 'react';
import Product from './Product';
import '../styles/productCompare.scss';
const products = {
    product001: {
        id: 'product001',
        name: 'Product 1',
        info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incidindunt',
        bullets: [
            'Lorem ipsum dolor sit',
            'Consectetur adipiscing',
            'Sed do eiusmod tempor',
            'Lorem ipsum dolor sit'
        ],
        tooltipHeading: 'Product 1 tip',
        tooltipText: 'Aliquam in orci sit amet odio rhoncus'
    },
    product002: {
        id: 'product002',
        name: 'Product 2',
        info: 'Lorem ipsum dolor sit amet consectetur.',
        bullets: [
            'Lorem ipsum dolor sit',
            'Sed do eiusmod tempor'
        ],
        tooltipHeading: 'Product 2 tip',
        tooltipText: 'Maecenas placerat, orci eu pellentesque'
    },
    product003: {
        id: 'product003',
        name: 'Product 3',
        info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do',
        bullets: [
            'Lorem ipsum dolor sit',
            'Consectetur adipiscing',
            'Sed do eiusmod tempor'
        ],
        tooltipHeading: 'Product 3 tip',
        tooltipText: 'Sed massa augue, dignissim id condimentum'
    }
};

const ProductCompare = () => {
    const productNodes = Object.entries(products)
        .map((product) => (
            <Product key={product[0]}>
                prodInfo={product[1]}
            </Product>
        ));

    return <div className="productCompare"> {productNodes} </div>;
};

ProductCompare.propTypes = {
    products: PropTypes.object
};

export default ProductCompare;
