import { Reducer } from 'redux';

import { typeTopScore, topScoreTypes } from '../actions/topScoreActions';

const topScoreReducer: Reducer<number, typeTopScore> = (state: number = 0, action) => {
	switch (action.type) {
		case topScoreTypes.CHANGE_TOP_SCORE:
            if (action.data > state) return action.data;
			return state;
		default:
			return state;
	}
};
export default topScoreReducer;