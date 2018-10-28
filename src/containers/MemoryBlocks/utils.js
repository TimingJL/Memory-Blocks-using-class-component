import {
    PIANO_SOUNDS_URL,
    CHORD,
} from 'containers/MemoryBlocks/constants';

export const getAudioObject = (note) => new Audio(PIANO_SOUNDS_URL + note + '.wav');

export const playSoundEffect = (type) => {
    const soundSet = CHORD[type];
    soundSet.forEach((note) => {
        const audioObject = getAudioObject(note);
        audioObject.currentTime = 0;
        audioObject.play();
    });
};
