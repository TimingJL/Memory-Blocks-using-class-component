import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyledMemoryBlocks } from 'containers/MemoryBlocks/Styled';
import Block from './components/Block';
import Progress from './components/Progress';

import {
    selectBlocks,
    selectSideLength,
    selectLevelData,
    selectIsGameStart,
    selectLevel,
    selectIsComplete,
    selectIsCorrect,
    selectAnswer,
    selectChance,
} from './selectors';
import {
    setInit,
    updateAnswer,
    updateIsComplete,
    updateIsCorrect,
    setGameRestart,
} from './actions';
import {
    SOUND_EFFECT,
    DEFAULT_LEVEL,
} from './constants';
import {
    playSoundEffect,
    playLevelSound,
    flashAllBlocks,
    clearAllTimeouts,
} from './utils';

class MemoryBlocks extends Component {
    static propTypes = {
        blocks: PropTypes.instanceOf(List),
        sideLength: PropTypes.number,
        isGameStart: PropTypes.bool,
        level: PropTypes.number,
        chance: PropTypes.number,
        isComplete: PropTypes.bool,
        isCorrect: PropTypes.bool,
        handleSetInit: PropTypes.func,
        handleUpdateAnswer: PropTypes.func,
        handleSetGameRestart: PropTypes.func,
    }
    static defaultProps = {
        blocks: List(),
        sideLength: 0,
        isGameStart: false,
        level: DEFAULT_LEVEL,
        chance: 0,
        isComplete: false,
        isCorrect: true,
        handleSetInit: () => { },
        handleUpdateAnswer: () => { },
        handleSetGameRestart: () => { },
    }
    componentDidUpdate(prevProps, prevState) {
        const {
            blocks,
            sideLength,
            levelData,
            // chance,
            isComplete,
            isCorrect,
            handleUpdateIsComplete,
            handleUpdateIsCorrect,
        } = this.props;
        // game start 要播放一次
        // 要求repeat 要播放一次
        // 進到下一關，要播放一次

        if (isComplete) {
            handleUpdateIsComplete(false);
            setTimeout(() => {
                playSoundEffect(SOUND_EFFECT.correct);
                flashAllBlocks(blocks, sideLength);
            }, 500);
            setTimeout(() => {
                playLevelSound(levelData, blocks);
            }, 3000);
        } else if (!isCorrect) {
            handleUpdateIsCorrect(true);
            setTimeout(() => {
                playSoundEffect(SOUND_EFFECT.wrong);
                flashAllBlocks(blocks, sideLength);
            }, 500);
            setTimeout(() => {
                playLevelSound(levelData, blocks);
            }, 3000);
        }
    }
    handleOnBlockClick = (event) => {
        const {
            blocks,
            handleUpdateAnswer,
        } = this.props;
        const blockId = event.target.getAttribute('data-id');
        const audioObject = blocks.getIn([blockId, 'audio'])();

        audioObject.currentTime = 0;
        audioObject.play();
        handleUpdateAnswer(parseInt(blockId, 10));
    }
    handleOnGameStart = () => {
        const {
            levelData,
            blocks,
            handleSetInit,
        } = this.props;
        handleSetInit();
        playSoundEffect(SOUND_EFFECT.correct);
        flashAllBlocks(blocks);
        setTimeout(() => {
            playLevelSound(levelData, blocks);
        }, 2000);
    }
    handleOnGameRestart = () => {
        const {
            handleSetGameRestart,
        } = this.props;
        clearAllTimeouts();
        handleSetGameRestart();
    }
    render() {
        const {
            levelData,
            answer,
            isGameStart,
            blocks,
            sideLength,
            level,
            chance,
        } = this.props;
        return (
            <StyledMemoryBlocks sideLength={sideLength}>
                <div className="memory-blocks__title-wrapper">
                    <div>Memory</div>
                    <div>Blocks</div>
                </div>
                <div className="memory-blocks__info">Level {level}</div>
                <div className="memory-blocks__blocks-wrapper">
                    {
                        blocks.map((block) => (
                            <Block
                                key={block.get('id')}
                                blockId={block.get('id')}
                                sideLength={sideLength}
                                handleOnClick={this.handleOnBlockClick}
                            />
                        ))
                    }
                    {
                        !isGameStart &&
                        <div className="memory-blocks__panel">
                            <button
                                className="memory-blocks__start-btn"
                                onClick={this.handleOnGameStart}
                            >
                                Start
                            </button>
                        </div>
                    }
                </div>
                <Progress
                    levelData={levelData}
                    answer={answer}
                />
                {
                    isGameStart &&
                    <div className="memory-blocks__group-btn-wrapper">
                        <button className="memory-blocks__hint-btn memory-blocks__font-music">
                            <i className="fas fa-music memory-blocks__font-music" />
                            <span> x {chance}</span>
                        </button>
                        <button className="memory-blocks__restart-btn" onClick={this.handleOnGameRestart}>Restart</button>
                    </div>
                }
            </StyledMemoryBlocks>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    blocks: selectBlocks(),
    sideLength: selectSideLength(),
    levelData: selectLevelData(),
    answer: selectAnswer(),
    isGameStart: selectIsGameStart(),
    level: selectLevel(),
    isComplete: selectIsComplete(),
    isCorrect: selectIsCorrect(),
    chance: selectChance(),
});

const mapDispatchToProps = dispatch => ({
    handleSetInit: () => dispatch(setInit()),
    handleSetGameRestart: () => dispatch(setGameRestart()),
    handleUpdateAnswer: (note) => dispatch(updateAnswer(note)),
    handleUpdateIsComplete: (isComplete) => dispatch(updateIsComplete(isComplete)),
    handleUpdateIsCorrect: (isCorrect) => dispatch(updateIsCorrect(isCorrect)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MemoryBlocks);
