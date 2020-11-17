import {combineReducers } from 'redux';
import allCardsReducer from './cardsReducer';
import gameStatusReducer from './gameStatusReducer';
import {CardSrtucture} from '../type';
import scoreReducer from './scoreReducer';
import topScoreReducer from './topScoreReducer';

export type AppState = {
    allCards: Array<CardSrtucture>;
    gameStatus: string;
    score: number;
    topScore: number;
  };
const createRootReducer  = combineReducers<AppState>({
    allCards: allCardsReducer,
    gameStatus: gameStatusReducer,
    score: scoreReducer,
    topScore: topScoreReducer,
});

export default createRootReducer;