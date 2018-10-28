import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyledMemoryBlocks, StyledBlock } from 'containers/MemoryBlocks/Styled';

import {
    makeSelectBlocks,
    makeSelectSideLength,
} from './selectors';

import {
    playSoundEffect,
} from './utils';

class MemoryBlocks extends Component {
    static propTypes = {
        blocks: PropTypes.instanceOf(List),
        sideLength: PropTypes.number,
    }
    static defaultProps = {
        blocks: List(),
        sideLength: 0,
    }
    componentDidMount() {
        playSoundEffect('correct');
    }
    handleOnBlockClick = (event) => {
        const {
            blocks,
        } = this.props;
        const blockId = event.target.getAttribute('data-id');
        const audioObject = blocks.getIn([blockId, 'audio'])();

        audioObject.currentTime = 0;
        audioObject.play();
    }
    render() {
        const {
            blocks,
            sideLength,
        } = this.props;
        return(
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
                                data-id={block.get('id')}
                                sideLength={sideLength}
                                onClick={this.handleOnBlockClick}
                            >
                                {block.get('id')}
                            </StyledBlock>
                        ))
                    }
                </div>
            </StyledMemoryBlocks>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    blocks: makeSelectBlocks(),
    sideLength: makeSelectSideLength(),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MemoryBlocks);
