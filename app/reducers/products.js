// products reducer

// Note that this is dummy initial state data to drive the demo of this app
// This data would come from a database via middleware
export const initialState = {
    product001: {
        id: 'product001',
        name: 'Product 1',
        info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incidindunt',
        bullets: [
            'Lorem ipsum dolor sit',
            'Consectetur adipiscing',
            'Sed do eiusmod tempor',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Consectetur adipiscing',
            'Sed do eiusmod tempor',
            'Lorem ipsum dolor sit',
            'Consectetur adipiscing',
            'Sed do eiusmod tempor',
            'Lorem ipsum dolor sit',
            'Lorem ipsum dolor sit',
            'Consectetur adipiscing',
            'Sed do eiusmod tempor',
            'Lorem ipsum dolor sit',
            'Consectetur adipiscing',
            'Sed do eiusmod tempor'
        ],
        tooltipHeading: 'Product 1 tip',
        tooltipText: 'Aliquam in orci sit amet odio rhoncus'
    },
    product002: {
        id: 'product002',
        name: 'Product 2',
        info: 'Aliquam in orci sit amet odio rhoncus rhoncus at eu elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit, nunc vel consequat tempus, erat massa fringilla justo, at fringilla metus quam sagittis nunc.',
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

export default function products(state = initialState, action) {
    switch (action.type) { // add cases handling for actions here
        default:
            return state;
    }
}

