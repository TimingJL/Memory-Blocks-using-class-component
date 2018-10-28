import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyledMemoryBlocks, StyledBlock } from 'containers/MemoryBlocks/Styled';

import {
    makeSelectBlocks,
    makeSelectSideLength,
    makeSelectLevelData,
    makeSelectIsGameStart,
} from './selectors';
import {
    setInit,
    updateAnswer,
} from './actions';
import {
    SOUND_EFFECT,
} from './constants';
import {
    playSoundEffect,
    playLevelSound,
    flashAllBlocks,
} from './utils';

class MemoryBlocks extends Component {
    static propTypes = {
        blocks: PropTypes.instanceOf(List),
        sideLength: PropTypes.number,
        isGameStart: PropTypes.bool,
        handleSetInit: PropTypes.func,
        handleUpdateAnswer: PropTypes.func,
    }
    static defaultProps = {
        blocks: List(),
        sideLength: 0,
        isGameStart: false,
        handleSetInit: () => { },
        handleUpdateAnswer: () => { },
    }
    componentDidUpdate(prevProps, prevState) {
        const {
            blocks,
            levelData,
        } = this.props;
        setTimeout(() => {
            playLevelSound(levelData, blocks);
        }, 2000);
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
            blocks,
            handleSetInit,
        } = this.props;
        handleSetInit();
        playSoundEffect(SOUND_EFFECT.correct);
        flashAllBlocks(blocks);
    }
    render() {
        const {
            isGameStart,
            blocks,
            sideLength,
        } = this.props;
        return (
            <StyledMemoryBlocks sideLength={sideLength}>
                <div className="memory-blocks__title-wrapper">
                    <div>Memory</div>
                    <div>Blocks</div>
                </div>
                <div>Level:</div>
                <div className="memory-blocks__blocks-wrapper">
                    {
                        blocks.map((block) => (
                            <StyledBlock
                                key={block.get('id')}
                                blockId={block.get('id')}
                                sideLength={sideLength}
                            >
                                <div
                                    id={`block-${block.get('id')}`}
                                    data-id={block.get('id')}
                                    className="block__block-item"
                                    onClick={this.handleOnBlockClick}
                                >
                                    {block.get('id')}
                                </div>
                            </StyledBlock>
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
            </StyledMemoryBlocks>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    blocks: makeSelectBlocks(),
    sideLength: makeSelectSideLength(),
    levelData: makeSelectLevelData(),
    isGameStart: makeSelectIsGameStart(),
});

const mapDispatchToProps = dispatch => ({
    handleSetInit: () => dispatch(setInit()),
    handleUpdateAnswer: (note) => dispatch(updateAnswer(note)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MemoryBlocks);
