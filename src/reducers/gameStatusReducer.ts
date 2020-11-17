import { Reducer } from 'redux';

import { GameActions, GameSatusTypes } from '../actions/gameStatus';

const initialState: string = 'active';

const gameStatusReducer: Reducer<string, GameActions> = (state: string = initialState, action) => {
	switch (action.type) {
		case GameSatusTypes.GAME_ACTIVE:
			return 'active';
		case GameSatusTypes.GAME_WIN:
			return 'win';
		case GameSatusTypes.GAME_FAILED:
			return 'failed';
		default:
			return state;
	}
};
export default gameStatusReducer;
