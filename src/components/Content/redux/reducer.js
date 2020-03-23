import { START_DEFAULT_CONTENT_GET, SUCCESS_DEFAULT_GETCONTENT, FAIL_DEFAULT_CONTENT, DELETE_DATA } from './types';

const initialState = {
	loading: false,
	err: null,
	data: []
};

export default (state = initialState, { type, response }) => {
	switch (type) {
		case START_DEFAULT_CONTENT_GET:
			return {
				...state,
				loading: true,
				err: null
			};
		case SUCCESS_DEFAULT_GETCONTENT:
			return {
				err: null,
				loading: false,
				data: response
			};
		case FAIL_DEFAULT_CONTENT:
			return {
				loading: false,
				data: [],
				err: response
			};
		case DELETE_DATA:
			return {
				loading: false,
				err: null,
				data: []
			};
		default:
			return state;
	}
};
