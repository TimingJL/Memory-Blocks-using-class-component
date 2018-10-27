import { createSelector } from 'reselect';

const selectMemoryBlocks = state => state.get('memoryBlocks');

const makeSelectBlocks = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('blocks'),
    );

const makeSelectSideLength = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('sideLength'),
    );

export {
    makeSelectBlocks,
    makeSelectSideLength,
};
