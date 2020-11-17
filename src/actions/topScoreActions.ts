import {ActionCreator} from 'redux';

export enum topScoreTypes {
    CHANGE_TOP_SCORE = 'CHANGE_TOP_SCORE',
};

export type typeTopScore = {
    type: topScoreTypes.CHANGE_TOP_SCORE;
    data: number
};

export const changeTopScore: ActionCreator<typeTopScore> = (score) => ({
    type: topScoreTypes.CHANGE_TOP_SCORE,
    data: score,
});
