import {
	expect,
	React,
	sinon,
	TestUtils
} from '../../../test/testCommons';
import App from './App.jsx';

describe('App component', () => {
	let sandbox;

	beforeEach(() => {
		sandbox = sinon.sandbox.create();
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('props', () => {
		describe('buttonText', () => {
			it('uses the provided value...', () => {
				const customButtonText = 'Click this button right here';
				const appElement = TestUtils.renderIntoDocument(<App buttonText={customButtonText} />);
				const buttonElement = TestUtils.findRenderedDOMComponentWithTag(appElement, 'BUTTON');

				expect(buttonElement.innerHTML).to.equal(customButtonText);
			});

			it('...unless no value has been provided in which case it uses the default value of "Click me".', () => {
				const defaultButtonText = 'Click me';
				const appElement = TestUtils.renderIntoDocument(<App />);
				const buttonElement = TestUtils.findRenderedDOMComponentWithTag(appElement, 'BUTTON');

				expect(buttonElement.innerHTML).to.equal(defaultButtonText);
			});
		});

		describe('clickCount', () => {
			it('uses the provided value...', () => {
				const customClickCount = 8;
				const appElement = TestUtils.renderIntoDocument(<App clickCount={customClickCount} />);
				const clickCountElement = TestUtils.findRenderedDOMComponentWithClass(appElement, 'click-count');

				expect(clickCountElement.innerHTML).to.equal(customClickCount + '');
			});

			it('...unless no value has been provided in which case it uses the default value of 0.', () => {
				const defaultClickCount = 0;
				const appElement = TestUtils.renderIntoDocument(<App />);
				const clickCountElement = TestUtils.findRenderedDOMComponentWithClass(appElement, 'click-count');

				expect(clickCountElement.innerHTML).to.equal(defaultClickCount + '');
			});
		});

		describe('onButtonClick', () => {
			it('is called with the value 1 when the button is clicked.', () => {
				const customOnButtonClick = (value) => {
					expect(value).to.equal(1);
				};
				const appElement = TestUtils.renderIntoDocument(<App onButtonClick={customOnButtonClick} />);
				const buttonElement = TestUtils.findRenderedDOMComponentWithTag(appElement, 'BUTTON');

				TestUtils.Simulate.click(buttonElement);
			});
		});

		describe('title', () => {
			it('uses the provided value...', () => {
				const customTitle = 'Click this button right here';
				const appElement = TestUtils.renderIntoDocument(<App title={customTitle} />);
				const titleElement = TestUtils.findRenderedDOMComponentWithTag(appElement, 'H1');

				expect(titleElement.innerHTML).to.equal(customTitle);
			});

			it('...unless no value has been provided in which case it uses the default value of "Placeholder app".', () => {
				const defaultTitle = 'Placeholder app';
				const appElement = TestUtils.renderIntoDocument(<App />);
				const titleElement = TestUtils.findRenderedDOMComponentWithTag(appElement, 'H1');

				expect(titleElement.innerHTML).to.equal(defaultTitle);
			});
		});
	});
});
