import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyledMemoryBlocks } from 'containers/MemoryBlocks/Styled';

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
                <div>Level:</div>
                <div className="memory-blocks__blocks-wrapper">
                    {
                        blocks.map((block) => (
                            <div
                                key={block.get('id')}
                                className="memory-blocks__block"
                            >
                                {block.get('id')}
                            </div>
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
