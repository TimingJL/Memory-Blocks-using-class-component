import React from 'react';
import PropTypes from 'prop-types';
import { StyledBlock } from './Styled';

const Block = ({ blockId, sideLength, handleOnClick }) => (
    <StyledBlock
        blockId={blockId}
        sideLength={sideLength}
    >
        <div
            id={`block-${blockId}`}
            data-id={blockId}
            className="block__block-item"
            onClick={handleOnClick}
        />
    </StyledBlock>
);

Block.propTypes = {
    blockId: PropTypes.number,
    sideLength: PropTypes.number,
    handleOnClick: PropTypes.func,
};
Block.defaultProps = {
    blockId: 0,
    sideLength: 0,
    handleOnClick: () => { },
};

export default Block;
