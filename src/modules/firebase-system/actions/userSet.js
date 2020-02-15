import {USER_SET} from '../types';
export const userSet = (state, dispatch) => payload =>
	dispatch({
		type: USER_SET,
		payload: payload,
	});
