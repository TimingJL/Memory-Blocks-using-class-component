import styled from 'styled-components';
import {
    GAME_WRAPPER_SIZE,
    SHADOW_WIDTH,
} from 'containers/MemoryBlocks/constants';

const size = 10;
export const StyledProgress = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin-top: 20px;
    position: relative;
    width: ${GAME_WRAPPER_SIZE}px;
    @media only screen and (max-width: 600px) {
        width: calc(100vw - ${SHADOW_WIDTH}px);
    }
    .progress__node {
        width: ${size}px;
        height: ${size}px;
        border-radius: 100%;
        margin: 5px 5px;
        background: white;
        opacity: 0.3;
    }
    .progress__node-active {
        opacity: 1;
        box-shadow: 0px 0px 15px 2px white;
    }
`;
