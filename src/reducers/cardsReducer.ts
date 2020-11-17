import {Reducer} from 'redux';

import {CardsActions, CardsActionTypes} from '../actions/cardsActions';
import {CardSrtucture} from '../type';

const initialState: Array<CardSrtucture> = [];

const allCardsReducer : Reducer<Array<CardSrtucture>, CardsActions> = (state: Array<CardSrtucture> = initialState, action) => {
	switch (action.type) {
		case CardsActionTypes.CARDS_LOAD:
			return [
				...action.data.slice(),
            ];
		case CardsActionTypes.CARD_PRESSED:
            const newState = [...state];
            newState[newState.findIndex(item => item.id === action.id)].clicked = true;
			return newState;
		default:
			return state;
	}
};

export default allCardsReducer;