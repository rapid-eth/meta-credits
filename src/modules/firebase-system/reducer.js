import {USER_SET} from './types';

const reducerActions = (state, action) => {
	switch (action.type) {
		/* ----------------------- */
		/*         Common          */
		/* ----------------------- */
		case USER_SET:
			console.log('setting user');
			return {
				...state,
				user: action.payload,
			};

		default:
			return state;
		// throw new Error(`No Reducer Type Set: ${type}`);
	}
};

export default reducerActions;
