import {
    SET_INIT,
    UPDATE_ANSWER,
} from './constants';

export const setInit = () => ({
    type: SET_INIT,
});

export const updateAnswer = (note) => ({
    type: UPDATE_ANSWER,
    payload: note,
});
