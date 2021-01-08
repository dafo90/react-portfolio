import { List } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import Element from './Element';

const ElementsArray = ({ className, elements }) =>
    elements.length ? (
        <List className={className} dense disablePadding>
            {elements.map(({ code, title, description, others, image, level }) => (
                <Element key={code} title={title} description={description} others={others} image={image} level={level} />
            ))}
        </List>
    ) : null;

ElementsArray.propTypes = {
    className: PropTypes.string,
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            others: PropTypes.string,
            image: PropTypes.string,
            level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })
    ).isRequired,
};

ElementsArray.defaultProps = {
    className: undefined,
};

export default ElementsArray;
