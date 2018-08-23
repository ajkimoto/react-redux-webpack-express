import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ProductCompare from './components/ProductCompareStateful';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ProductCompare} />
		<Route path="/about" component={About} />
	</Route>
);
