import styled, { keyframes } from 'styled-components';
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
        background: black;
        border: 2px solid white;
        color: white;
        border-radius: 40px;
        font-size: 2em;
        font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
        outline: none;
        &:hover {
            color: black;
            background: white;
            transition: all 0.8s;
        }
    }
`;

const breathShadow = props => keyframes`
    0% {
        box-shadow: none;
    }
    100% {
        box-shadow: 0px 0px 50px ${BLOCK_COLORS[props.blockId] + '80'};
    }
`;

export const StyledBlock = styled.div`
    .block__block-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        ${(props) => {
            const id = props.blockId;
            const sideLength = props.sideLength;
            return `
                border: ${6 / sideLength}px solid ${BLOCK_COLORS[id] + '80'};
            `;
        }}
        cursor: pointer;
        transition: 0.5s;
        background-color: transparent;
        animation: ${breathShadow} 1.5s infinite alternate-reverse;
        animation-delay: ${(props) => -2 * Math.random(props.blockId)}s;
        &:hover {
            ${(props) => {
            const id = props.blockId;
            return `background: ${BLOCK_COLORS[id] + '4d'};`
        }}
        }
        &:active {
            ${(props) => {
                const id = props.blockId;
                return `
                        background: ${BLOCK_COLORS[id]};
                        box-shadow: 0px 0px 50px ${BLOCK_COLORS[id]};
                    `;
            }}
            transition: 0s;
        }
    }
    .block__block-item-active {
        ${(props) => {
            const id = props.blockId;
            return `
                    background: ${BLOCK_COLORS[id]};
                    box-shadow: 0px 0px 50px ${BLOCK_COLORS[id]};
                `;
        }}
        transition: 0s;
    }
`;
