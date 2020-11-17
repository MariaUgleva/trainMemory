import {ActionCreator} from 'redux';

export enum ScoreTypes {
    INCREASE_SCORE = 'INCREASE_SCORE',
    RESET_SCORE = 'RESET_SCORE',
};

export type typeIncreaseScore = {
    type: ScoreTypes.INCREASE_SCORE;
};

export type typeResetScore = {
    type: ScoreTypes.RESET_SCORE;
};

export type ScoreActions = typeIncreaseScore | typeResetScore;

export const increaseScore: ActionCreator<typeIncreaseScore> = () => ({
    type: ScoreTypes.INCREASE_SCORE,
});

export const resetScore: ActionCreator<typeResetScore> = () => ({
    type: ScoreTypes.RESET_SCORE,
});