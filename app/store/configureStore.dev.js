import { createStore } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        DevTools.instrument()
    );
    window.compare = window.compare || {};
    window.compare.store = store;
    return store;
}
