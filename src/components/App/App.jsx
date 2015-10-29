import _ from 'lodash';
import React from 'react';

const {
	PropTypes: {
		func,
		number,
		string
	}
} = React;

const App = React.createClass({
	propTypes: {
		buttonText: string,
		clickCount: number,
		onButtonClick: func,
		title: string
	},

	getDefaultProps() {
		return {
			buttonText: 'Click me',
			clickCount: 0,
			onButtonClick: _.noop,
			title: 'Placeholder app'
		};
	},

	handleButtonClicked() {
		this.props.onButtonClick(1);
	},

	render() {
		return (
			<article className="App">
				<header>
					<h1>{this.props.title}</h1>
				</header>
				<section>
					<button onClick={this.handleButtonClicked}>{this.props.buttonText}</button>
					<span>You've clicked me <span className="click-count">{this.props.clickCount}</span> times so far.</span>
				</section>
			</article>
		);
	}
});

export default App;
