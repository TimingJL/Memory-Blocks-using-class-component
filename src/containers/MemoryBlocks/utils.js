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
            flashBlock(blockId);
        }, 500 * index);
    });
};

export const flashBlock = (id) => {
    document.getElementById(`block-${id}`).classList.add("block__block-item-active");
    setTimeout(() => {
        document.getElementById(`block-${id}`).classList.remove("block__block-item-active");
    }, 200);
};

export const flashAllBlocks = (blocks) => {
    blocks.forEach((block) => {
        flashBlock(block.get('id'));
    });
};

export const generateLevelData = (level, sideLength) => {
    const maxNote = sideLength * sideLength;
    // const numOfNote = level + sideLength;
    const numOfNote = 2;
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
