import { Reducer } from 'redux';

import { ScoreActions, ScoreTypes } from '../actions/scoreActions';

const scoreReducer: Reducer<number, ScoreActions> = (state: number = 0, action) => {
	switch (action.type) {
		case ScoreTypes.INCREASE_SCORE:
			return ++state;
		case ScoreTypes.RESET_SCORE:
			return 0;
		default:
			return state;
	}
};
export default scoreReducer;
