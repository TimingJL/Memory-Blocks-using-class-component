import { fromJS } from 'immutable';
import {
    DEFAULT_SIDE_LENGTH,
    DEFAULT_LEVEL,

    PIANO_SOUNDS,

    SET_INIT,
    UPDATE_ANSWER,
} from 'containers/MemoryBlocks/constants';

import {
    getAudioObject,
    generateLevelData,
} from 'containers/MemoryBlocks/utils';

const defaultBlocks = Array.from(Array(DEFAULT_SIDE_LENGTH * DEFAULT_SIDE_LENGTH), (value, index) => ({
    id: index,
    audio: () => getAudioObject(PIANO_SOUNDS[index]),
}));

const initialState = fromJS({
    blocks: defaultBlocks,
    sideLength: DEFAULT_SIDE_LENGTH,
    level: DEFAULT_LEVEL,
    levelData: generateLevelData(DEFAULT_LEVEL, DEFAULT_SIDE_LENGTH),
    answer: [],
    isGameStart: false,
});

function memoryBlocksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INIT: {
            return state.set('isGameStart', true);
        }
        case UPDATE_ANSWER: {
            const updatedAnswer = state.get('answer').push(action.payload);
            return state.set('answer', updatedAnswer);
        }
        default: {
            return state;
        }
    }
}

export default memoryBlocksReducer;
