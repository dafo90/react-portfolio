import { Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    bar: {
        borderLeft: `7px solid ${theme.palette.divider}`
    },
    title: {
        paddingLeft: theme.spacing(1)
    }
}));

function Section({ className, title, subtitle }) {
    const classes = useStyles();
    return (
        <div className={className}>
            <div className={classes.bar}>
                <Typography className={classes.title} variant="h4">
                    {title}
                </Typography>
            </div>
            {subtitle && (
                <Typography variant="subtitle1" color="textSecondary">
                    {subtitle}
                </Typography>
            )}
        </div>
    );
}

Section.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

Section.defaultProps = {
    className: '',
    subtitle: undefined
};

export default Section;
