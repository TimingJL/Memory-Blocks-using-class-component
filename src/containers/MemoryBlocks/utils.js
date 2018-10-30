import {
    PIANO_SOUNDS_URL,
    CHORD,
    BLOCK_COLORS,
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
    const blockId = `block-${id}`;
    const backgroundColor = BLOCK_COLORS[id]
    document.getElementById(blockId).style.background = backgroundColor;
    setTimeout(() => {
        document.getElementById(blockId).style.background = '';
    }, 300);
};

export const flashAllBlocks = (blocks) => {
    blocks.forEach((block) => {
        flashBlock(block.get('id'));
    });
};

export const generateLevelData = (level, sideLength) => {
    const maxNote = sideLength * sideLength;
    const numOfNote = level + sideLength;
    const levelData = Array.from(Array(numOfNote), (value, index) => Math.floor(Math.random() * maxNote));
    return levelData;
};
