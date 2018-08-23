import * as types from './types';

export function updateProducts(products) {
    return {
        type: types.PRODUCTS_UPDATE,
        products
    };
}
