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

class MemoryBlocks extends Component {
    static propTypes = {
        blocks: PropTypes.instanceOf(List),
        sideLength: PropTypes.number,
    }
    static defaultProps = {
        blocks: List(),
        sideLength: 0,
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
