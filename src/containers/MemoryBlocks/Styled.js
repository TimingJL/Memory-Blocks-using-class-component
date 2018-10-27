import styled from 'styled-components';
import {
    GAME_WRAPPER_SIZE,
    BLOCK_COLORS,
} from './constants';

export const StyledMemoryBlocks = styled.div`
    .memory-blocks__title-wrapper {
        color: white;
        font-size: 2em;
        font-weight: 900;
        text-align: right;
    }
    .memory-blocks__blocks-wrapper {
        width: ${GAME_WRAPPER_SIZE}px;
        height: ${GAME_WRAPPER_SIZE}px;
        @media only screen and (max-width: 600px) {
            width: calc(100vw - 20px);
            height: calc(100vw - 20px);
        }
        display: grid;
        ${(props) => {
            const sideLength = props.sideLength;
            return `
                grid-template-columns: repeat(${sideLength}, 1fr);
                grid-template-rows: repeat(${sideLength}, 1fr);
                grid-gap: ${40 / sideLength}px;
            `;
        }}
    }
`;

export const StyledBlock = styled.div`
    cursor: pointer;
    transition: 0.5s;
    &:active {
        ${(props) => {
            const id = props.blockId;
            return `
                background: ${BLOCK_COLORS[id]};
            `;
        }}
        transition: 0s;
    }
`;
