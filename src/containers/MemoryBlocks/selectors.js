import { createSelector } from 'reselect';

const selectMemoryBlocks = state => state.get('memoryBlocks');

const selectBlocks = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('blocks'),
    );

const selectSideLength = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('sideLength'),
    );

const selectLevelData = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('levelData'),
    );

const selectAnswer = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('answer'),
    );

const selectIsGameStart = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('isGameStart'),
    );

const selectLevel = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('level'),
    );

const selectIsComplete = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('isComplete'),
    );

const selectIsCorrect = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('isCorrect'),
    );

const selectChance = () =>
    createSelector(selectMemoryBlocks, tictactoeState =>
        tictactoeState.get('chance'),
    );

export {
    selectBlocks,
    selectSideLength,
    selectLevelData,
    selectAnswer,
    selectIsGameStart,
    selectLevel,
    selectIsComplete,
    selectIsCorrect,
    selectChance,
};
