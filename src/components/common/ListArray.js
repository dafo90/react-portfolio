import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
    description: {
        display: 'block'
    }
}));

const ListArray = ({ className, elements }) => {
    const classes = useStyles();
    return (
        elements.length && (
            <List className={className} dense disablePadding>
                {elements.map(({ id, title, description, others, image }) => (
                    <ListItem key={id}>
                        {image && (
                            <ListItemAvatar>
                                <Avatar className={classes.avatar} alt={title} src={image} />
                            </ListItemAvatar>
                        )}
                        <ListItemText
                            primary={title}
                            secondary={
                                description && others ? (
                                    <React.Fragment>
                                        <Typography component="span" variant="body2" className={classes.description} color="textPrimary">
                                            {description}
                                        </Typography>
                                        {others && <React.Fragment>{others}</React.Fragment>}
                                    </React.Fragment>
                                ) : (
                                    description
                                )
                            }
                        />
                    </ListItem>
                ))}
            </List>
        )
    );
};

ListArray.propTypes = {
    className: PropTypes.string,
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    ).isRequired
};

ListArray.defaultProps = {
    className: undefined
};

export default ListArray;
