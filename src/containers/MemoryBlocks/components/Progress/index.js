import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { StyledProgress } from './Styled';

const Progress = ({ levelData, answer }) => {
    const progressNode = Array.from(Array(levelData.size), (value, index) => ({
        id: index,
        className: (index < answer.size) ? 'progress__node progress__node-active' : 'progress__node',
    }));
    return (
        <StyledProgress>
            {
                progressNode.map((node) => (
                    <div
                        key={node.id}
                        className={node.className}
                    />
                ))
            }
        </StyledProgress>
    );
};

Progress.propTypes = {
    levelData: PropTypes.instanceOf(List),
    answer: PropTypes.instanceOf(List),
};
Progress.defaultProps = {
    levelData: List(),
    answer: List(),
};

export default Progress;
