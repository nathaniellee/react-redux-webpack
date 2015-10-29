import chai from 'chai';
import React from 'react';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TestUtils from 'react-addons-test-utils';

const { expect } = chai;

chai.use(sinonChai);

export {
	chai,
	expect,
	React,
	sinon,
	sinonChai,
	TestUtils
};
