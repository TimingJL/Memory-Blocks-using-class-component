import {
    SET_INIT,
    UPDATE_ANSWER,
    UPDATE_IS_COMPLETE,
    UPDATE_IS_CORRECT,
    SET_RESTART_GAME,
    SET_REPLAY_SOUND,
} from './constants';

export const setInit = () => ({
    type: SET_INIT,
});

export const updateAnswer = (note) => ({
    type: UPDATE_ANSWER,
    payload: note,
});

export const updateIsComplete = (isComplete) => ({
    type: UPDATE_IS_COMPLETE,
    payload: isComplete,
});

export const updateIsCorrect = (isCorrect) => ({
    type: UPDATE_IS_CORRECT,
    payload: isCorrect,
});

export const setGameRestart = () => ({
    type: SET_RESTART_GAME,
});

export const setReplaySound = () => ({
    type: SET_REPLAY_SOUND,
});
