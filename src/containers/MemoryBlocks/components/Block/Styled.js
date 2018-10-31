import styled, { keyframes } from 'styled-components';
import {
    BLOCK_COLORS,
    SHADOW_WIDTH,
} from 'containers/MemoryBlocks/constants';

const breathShadow = props => keyframes`
    0% {
        box-shadow: none;
    }
    100% {
        box-shadow: 0px 0px ${SHADOW_WIDTH}px 5px ${BLOCK_COLORS[props.blockId] + '80'};
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
                return `
                    background: ${BLOCK_COLORS[id] + '4d'};
                `
            }}
        }
        &:active {
            ${(props) => {
                const id = props.blockId;
                return `
                    animation: none;
                    background: ${BLOCK_COLORS[id]};
                    box-shadow: 0px 0px ${SHADOW_WIDTH}px 7px ${BLOCK_COLORS[id]};
                `;
            }}
            transition: 0s;
        }
    }
    .block__block-item-active {
        ${(props) => {
            const id = props.blockId;
            return `
                animation: none;
                background: ${BLOCK_COLORS[id]};
                box-shadow: 0px 0px ${SHADOW_WIDTH}px 7px ${BLOCK_COLORS[id]};
            `;
        }}
        transition: 0s;
    }
`;
