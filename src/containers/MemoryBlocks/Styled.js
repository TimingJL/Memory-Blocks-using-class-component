import styled from 'styled-components';
import {
    GAME_WRAPPER_SIZE,
} from './constants';

export const StyledMemoryBlocks = styled.div`
    .memory-blocks__title-wrapper {
        color: white;
        font-size: 2em;
        font-weight: 900;
        text-align: right;
        letter-spacing: 1px;
    }
    .memory-blocks__blocks-wrapper {
        position: relative;
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
    .memory-blocks__info {
        color: red;
        font-size: 1.5em;
        margin: 20px 0px 10px 0px;
    }
    .memory-blocks__panel {
        position: absolute;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .memory-blocks__start-btn {
        width: 200px;
        height: 80px;
        background: #000000b3;
        border: 2px solid white;
        color: white;
        border-radius: 40px;
        font-size: 2em;
        font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
        outline: none;
        transition: all 0.8s;
        &:hover {
            color: black;
            background: white;
            opacity: 1;
        }
    }
`;
