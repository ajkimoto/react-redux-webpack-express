// default reducer
// Note: You can remove this reducer and create your own reducer

//import { FETCH_DATA } from '../actions';

export const initialState = {
  product001: {
    id: "product001",
      name: "Product 1",
      info: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incidindunt",
      bullets: [
        "Lorem ipsum dolor sit",
        "Consectetur adipiscing",
        "Sed do eiusmod tempor",
        "Lorem ipsum dolor sit",
        "Consectetur adipiscing",
        "Lorem ipsum dolor sit",
        "Consectetur adipiscing",
        "Lorem ipsum dolor sit",
        "Consectetur adipiscing",
        "Lorem ipsum dolor sit",
        "Consectetur adipiscing"
      ]
  },
  product002: {
    id: "product002",
    name: "Product 2",
    info: "Lorem ipsum dolor sit amet consectetur.",
    bullets: [
      "Lorem ipsum dolor sit",
      "Sed do eiusmod tempor"
    ]
  },
  product003: {
    id: "product003",
    name: "Product 3",
    info: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do",
    bullets: [
      "Lorem ipsum dolor sit",
      "Consectetur adipiscing",
      "Sed do eiusmod tempor"
    ]
  }
};

export default function products(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// export default (state = {}, action) => {
//   switch(action.type) {
//     case FETCH_DATA:
//       return action.payload;
//     default:
//       return state;
//   }
// }