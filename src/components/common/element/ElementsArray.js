import React from 'react';
import { List } from '@material-ui/core';
import PropTypes from 'prop-types';
import Element from './Element';

const ElementsArray = ({ className, elements }) => {
    return (
        elements.length && (
            <List className={className} dense disablePadding>
                {elements.map(({ id, title, description, others, image, level }) => (
                    <Element key={id} id={id} title={title} description={description} others={others} image={image} level={level} />
                ))}
            </List>
        )
    );
};

ElementsArray.propTypes = {
    className: PropTypes.string,
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            others: PropTypes.string,
            image: PropTypes.string,
            level: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
    ).isRequired
};

ElementsArray.defaultProps = {
    className: undefined
};

export default ElementsArray;
