import {
    PIANO_SOUNDS_URL,
    CHORD,
} from 'containers/MemoryBlocks/constants';

export const getAudioObject = (note) => new Audio(PIANO_SOUNDS_URL + note + '.wav');

export const playSoundEffect = (type) => {
    const soundSet = CHORD[type];
    soundSet.forEach((audioObject) => {
        audioObject.currentTime = 0;
        audioObject.play();
    });
};

export const playLevelSound = (levelData, blocks) => {
    levelData.forEach((blockId, index) => {
        setTimeout(() => {
            const audioObject = blocks.getIn([blockId.toString(), 'audio'])();
            audioObject.currentTime = 0;
            audioObject.play();
            flashBlock(blockId, true);
        }, 500 * index);
    });
    return levelData.size * 500;
};

export const flashBlock = (id, isCorrect) => {
    const blockActiveColor = isCorrect ? 'block__block-item-active' : 'block__block-item-active-wrong';
    document.getElementById(`block-${id}`).classList.add(blockActiveColor);
    setTimeout(() => {
        document.getElementById(`block-${id}`).classList.remove(blockActiveColor);
    }, 200);
};

export const flashAllBlocks = (blocks, isCorrect) => {
    blocks.forEach((block) => {
        flashBlock(block.get('id'), isCorrect);
    });
};

export const generateLevelData = (level, sideLength) => {
    const maxNote = sideLength * sideLength;
    const numOfNote = level + sideLength;
    const levelData = Array.from(Array(numOfNote), (value, index) => Math.floor(Math.random() * maxNote));
    return levelData;
};

export const clearAllTimeouts = () => {
    // clear "all" timeouts
    const biggestTimeoutId = window.setTimeout(function () { }, 1);
    for (let i = 1; i <= biggestTimeoutId; i++) {
        clearTimeout(i);
    }
};
