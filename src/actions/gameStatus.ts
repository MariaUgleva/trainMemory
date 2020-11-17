import { ActionCreator } from 'redux';

export enum GameSatusTypes {
    GAME_ACTIVE = 'GAME_ACTIVE',
    GAME_WIN = 'GAME_WIN',
    GAME_FAILED = 'GAME_FAILED',
}
export type typeActiveStatus = {
    type: GameSatusTypes.GAME_ACTIVE;
};

export type typeWinStatus = {
    type: GameSatusTypes.GAME_WIN;
};

export type typeFailedStatus = {
    type: GameSatusTypes.GAME_FAILED;
};

export type GameActions = typeActiveStatus | typeWinStatus | typeFailedStatus; 

export const setActiveStatus: ActionCreator<typeActiveStatus> = () => ({
    type: GameSatusTypes.GAME_ACTIVE,
});

export const setWinStatus: ActionCreator<typeWinStatus> = () => ({
    type: GameSatusTypes.GAME_WIN,
});

export const setFailedStatus: ActionCreator<typeFailedStatus> = () => ({
    type: GameSatusTypes.GAME_FAILED,
});