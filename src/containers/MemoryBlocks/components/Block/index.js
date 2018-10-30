import React from 'react';
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
        >
            {blockId}
        </div>
    </StyledBlock>
);

export default Block;
