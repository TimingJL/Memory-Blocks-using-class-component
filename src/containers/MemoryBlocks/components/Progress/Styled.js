import styled from 'styled-components';

const size = 10;
export const StyledProgress = styled.ul`
    display: flex;
    list-style-type: none;
    margin-top: 20px;
    .progress__node {
        width: ${size}px;
        height: ${size}px;
        border-radius: 100%;
        margin: 0px 5px;
        background: white;
        opacity: 0.3;
    }
    .progress__node-active {
        opacity: 1;
        box-shadow: 0px 0px 15px 2px white;
    }
`;
