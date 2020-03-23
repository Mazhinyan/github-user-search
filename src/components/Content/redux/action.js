import { START_DEFAULT_CONTENT_GET, SUCCESS_DEFAULT_GETCONTENT, FAIL_DEFAULT_CONTENT, DELETE_DATA } from './types';
import defaultAPI from '../../../defaultAPI';

/**
 * 
 * @param {user_name} user_name 
 * return object shape (3 phases)
 */

export function getContentAction(user_name = 'gaearon') {
	return async function(dispatch) {
		try {
			dispatch({
				type: START_DEFAULT_CONTENT_GET
			});
			const response = await defaultAPI({ user: user_name });

			dispatch({ type: SUCCESS_DEFAULT_GETCONTENT, response: response.data });
		} catch (err) {
			dispatch({ type: FAIL_DEFAULT_CONTENT, response: err });
		}
	};

	//we can use also defaultAPI(...).then(res=>diapatch(...))..catch((e) => diapatch(...))
}

/**
 * return only type for reset state
 */
export function deletePost() {
	return {
		type: DELETE_DATA
	};
}
