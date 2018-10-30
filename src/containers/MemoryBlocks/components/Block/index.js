import React from 'react';
import PropTypes from 'prop-types';
import { StyledBlock } from './Styled';

class Block extends React.PureComponent {
    static propTypes = {
        blockId: PropTypes.number,
        sideLength: PropTypes.number,
        handleOnClick: PropTypes.func,
    }
    static defaultProps = {
        blockId: 0,
        sideLength: 0,
        handleOnClick: () => { },
    }
    render() {
        const {
            blockId,
            sideLength,
            handleOnClick,
        } = this.props;
        return (
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
    }
}

export default Block;
