import { ActionCreator } from 'redux';
import {CardSrtucture} from '../type';

export enum CardsActionTypes {
	CARDS_LOAD = 'CARDS_LOAD',
	CARD_PRESSED = 'CARD_PRESSED',
}
export type addCardsToState = {
	type: CardsActionTypes.CARDS_LOAD;
	data: Array<CardSrtucture>;
};

export type cardPressed = {
	type: CardsActionTypes.CARD_PRESSED;
	id: number;
};

export type CardsActions = addCardsToState | cardPressed;

export const addCartsToState: ActionCreator<addCardsToState> = (data: Array<CardSrtucture>) => ({
	type: CardsActionTypes.CARDS_LOAD,
	data: data,
});
export const changeCardClicked: ActionCreator<cardPressed> = (id: number) => ({
	type: CardsActionTypes.CARD_PRESSED,
	id: id,
});
