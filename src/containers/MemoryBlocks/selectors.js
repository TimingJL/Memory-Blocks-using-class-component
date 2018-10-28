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

const makeSelectLevelData = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('levelData'),
    );

const makeSelectIsGameStart = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('isGameStart'),
    );

export {
    makeSelectBlocks,
    makeSelectSideLength,
    makeSelectLevelData,
    makeSelectIsGameStart,
};
