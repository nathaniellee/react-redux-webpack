import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { INCREMENT } from './constants/actionTypes';
import { increment } from './actions';

import App from './components/App/App.jsx';
import './main.less';

const initialState = {
	clickCount: 0
};

const store = createStore(function (state = initialState, action) {
	const { type, value } = action;

	if (type === INCREMENT) {
		state.clickCount += value;
	}

	return state;
});

const { dispatch } = store;
const boundIncrement = (value) => dispatch(increment(value));

const render = () => {
	const state = store.getState();

	ReactDOM.render(
		<App
				{...state}
				onButtonClick={boundIncrement}
		/>,
		document.getElementById('root')
	);
};

store.subscribe(() => {
	render();
});

render();
