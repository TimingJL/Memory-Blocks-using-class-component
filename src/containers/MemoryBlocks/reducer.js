import { fromJS } from 'immutable';
import {
    DEFAULT_SIDE_LENGTH,
} from 'containers/MemoryBlocks/constants';

const defaultBlocks = Array.from(Array(DEFAULT_SIDE_LENGTH * DEFAULT_SIDE_LENGTH), (value, index) => ({
    id: index + 1,
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
