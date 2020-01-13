import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction, Avatar, Typography } from '@material-ui/core';
import useIsInViewport from 'use-is-in-viewport';
import PropTypes from 'prop-types';
import BulletsBar from '../bullet/BulletsBar';

const useStyles = makeStyles(() => ({
    description: {
        display: 'block'
    }
}));

const Element = ({ className, title, description, others, image, level }) => {
    const classes = useStyles();
    const [isElementInViewport, elementPaper] = useIsInViewport();
    const [startBulletsTransition, setStartBulletsTransition] = useState(false);
    useEffect(() => {
        if (isElementInViewport) {
            const timeout = setTimeout(() => {
                setStartBulletsTransition(true);
            }, 750);
            return () => clearTimeout(timeout);
        }
        return undefined;
    }, [isElementInViewport]);

    const content = () => {
        if (level) {
            return (
                <React.Fragment>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                        {typeof level === 'number' ? (
                            <BulletsBar startBulletsTransition={startBulletsTransition} className={classes.levelBar} level={level} max={5} />
                        ) : (
                            <Typography component="span" variant="body2" color="textSecondary">
                                {level}
                            </Typography>
                        )}
                    </ListItemSecondaryAction>
                </React.Fragment>
            );
        }
        if (description && others) {
            return (
                <ListItemText
                    className={className}
                    primary={title}
                    secondary={
                        <React.Fragment>
                            <Typography component="span" variant="body2" className={classes.description} color="textPrimary">
                                {description}
                            </Typography>
                            {others && <React.Fragment>{others}</React.Fragment>}
                        </React.Fragment>
                    }
                />
            );
        }
        return <ListItemText primary={title} secondary={description} />;
    };

    return (
        <ListItem ref={elementPaper}>
            {image && (
                <ListItemAvatar>
                    <Avatar className={classes.avatar} alt={title} src={image} />
                </ListItemAvatar>
            )}
            {content(title, description, others, level)}
        </ListItem>
    );
};

Element.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    others: PropTypes.string,
    image: PropTypes.string,
    level: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Element.defaultProps = {
    className: undefined,
    description: undefined,
    others: undefined,
    image: undefined,
    level: undefined
};

export default Element;
