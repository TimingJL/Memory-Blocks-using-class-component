import { combineReducers } from 'redux-immutable';
import memoryBlocksReducer from 'containers/MemoryBlocks/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        memoryBlocks: memoryBlocksReducer,
    });
};
