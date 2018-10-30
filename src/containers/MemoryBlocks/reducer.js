import { fromJS, List } from 'immutable';
import {
    DEFAULT_SIDE_LENGTH,
    MAX_SIDE_LENGTH,
    DEFAULT_LEVEL,
    LEVEL_SET,
    DEFAULT_CHANCE,
    MAX_CHANCE,

    PIANO_SOUNDS,

    SET_INIT,
    UPDATE_ANSWER,
    UPDATE_IS_COMPLETE,
    UPDATE_IS_CORRECT,
} from 'containers/MemoryBlocks/constants';

import {
    getAudioObject,
    generateLevelData,
} from 'containers/MemoryBlocks/utils';

const createBlocks = sideLength => Array.from(Array(sideLength * sideLength), (value, index) => ({
    id: index,
    audio: () => getAudioObject(PIANO_SOUNDS[index]),
}));

const initialState = fromJS({
    blocks: createBlocks(DEFAULT_SIDE_LENGTH),
    sideLength: DEFAULT_SIDE_LENGTH,
    level: DEFAULT_LEVEL,
    levelData: generateLevelData(DEFAULT_LEVEL, DEFAULT_SIDE_LENGTH),
    answer: [],
    isGameStart: false,
    isCorrect: true,
    isComplete: false,
    chance: DEFAULT_CHANCE,
});

function memoryBlocksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INIT: {
            return state.set('isGameStart', true);
        }
        case UPDATE_ANSWER: {
            const updatedAnswer = state.get('answer').push(action.payload);
            const levelData = state.get('levelData');
            const level = state.get('level');
            const sideLength = state.get('sideLength');
            // const chance = state.get('chance');
            const isCorrect = answerVerify(updatedAnswer, levelData);
            if (isCorrect && (updatedAnswer.size === levelData.size)) {
                // if correct and complete
                const updatedLevel = level + 1;
                const updatedSideLength = (sideLength + 1) > MAX_SIDE_LENGTH ? MAX_SIDE_LENGTH : (sideLength + 1);
                // const updatedChance = (chance + 1) > MAX_CHANCE ? MAX_CHANCE : (chance + 1);
                return state
                    .set('isComplete', true)
                    .set('level', updatedLevel)
                    .set('levelData', fromJS(generateLevelData(updatedLevel, sideLength)))
                    .set('answer', List())
                    .updateIn(['sideLength'], (sideLength) => {
                        if (updatedLevel % LEVEL_SET === 0) {
                            return updatedSideLength;
                        }
                        return sideLength;
                    })
                    .updateIn(['blocks'], (blocks) => {
                        if (updatedLevel % LEVEL_SET === 0) {
                            return fromJS(createBlocks(updatedSideLength));
                        }
                        return blocks;
                    })
                    .updateIn(['chance'], (chance) => {
                        return (chance + 1) > MAX_CHANCE ? MAX_CHANCE : (chance + 1);
                    });
            }
            if (isCorrect) {
                // if correct
                return state.set('answer', updatedAnswer);
            } else {
                // if wrong
                return state
                    .set('isCorrect', false)
                    .set('answer', List())
                    .updateIn(['chance'], (chance) => {
                        return (chance - 1) < 1 ? 0 : (chance - 1);
                    });
            }
        }
        case UPDATE_IS_COMPLETE : {
            return state.set('isComplete', action.payload);
        }
        case UPDATE_IS_CORRECT: {
            return state.set('isCorrect', action.payload);
        }
        default: {
            return state;
        }
    }
}

export default memoryBlocksReducer;

const answerVerify = (answer, levelData) => {
    let isCorrect;
    answer.forEach((note, index) => {
        if (note === levelData.get(index)) {
            isCorrect = true;
        } else {
            isCorrect = false;
        }
    });
    return isCorrect;
};
