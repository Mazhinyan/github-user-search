import { combineReducers } from 'redux';
import { content } from '../components/Content/redux';
const rootReducer = combineReducers({
	user: content
});

export default rootReducer;
