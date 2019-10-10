import { Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(2)
    },
    bar: {
        borderLeft: `7px solid ${theme.palette.divider}`
    },
    title: {
        paddingLeft: theme.spacing(1)
    }
}));

function Section({ className, title, subtitle }) {
    const classes = useStyles();
    const rootClassName = classNames(classes.root, { [`${className}`]: className });
    return (
        <div className={rootClassName}>
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
    className: undefined,
    subtitle: undefined
};

export default Section;
