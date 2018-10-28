import { fromJS } from 'immutable';
import {
    DEFAULT_SIDE_LENGTH,

    PIANO_SOUNDS,
} from 'containers/MemoryBlocks/constants';

import {
    getAudioObject,
} from './utils';

const defaultBlocks = Array.from(Array(DEFAULT_SIDE_LENGTH * DEFAULT_SIDE_LENGTH), (value, index) => ({
    id: index,
    audio: () => getAudioObject(PIANO_SOUNDS[index]),
}));

const initialState = fromJS({
    blocks: defaultBlocks,
    sideLength: DEFAULT_SIDE_LENGTH,
});

function memoryBlocksReducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default memoryBlocksReducer;
