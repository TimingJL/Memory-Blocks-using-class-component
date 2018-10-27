import styled from 'styled-components';
import {
    GAME_WRAPPER_SIZE,
} from './constants';

export const StyledMemoryBlocks = styled.div`
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

    .memory-blocks__block {
        /* background: white; */
        cursor: pointer;
        transition: 0.5s;
        &:active {
            background: white;
            transition: 0s;
        }
    }
`;
