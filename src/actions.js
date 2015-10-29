import { INCREMENT } from './constants/actionTypes';

export default {
	increment(value) {
		return {
			type: INCREMENT,
			value
		};
	}
};
