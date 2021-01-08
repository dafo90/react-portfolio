import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Interpreter from './Interpreter';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
    },
    bar: {
        borderLeft: `7px solid ${theme.palette.primary.light}`,
    },
    title: {
        paddingLeft: theme.spacing(1),
    },
}));

const Section = ({ className, title, subtitle }) => {
    const classes = useStyles();
    const rootClassName = classNames(classes.root, { [className]: !!className });
    return (
        <div className={rootClassName}>
            <div className={classes.bar}>
                <Typography className={classes.title} variant="h4">
                    <Interpreter conf={title} />
                </Typography>
            </div>
            {subtitle && (
                <Typography variant="subtitle1" color="textSecondary">
                    <Interpreter conf={subtitle} />
                </Typography>
            )}
        </div>
    );
};

Section.propTypes = {
    className: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    subtitle: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Section.defaultProps = {
    className: undefined,
    subtitle: undefined,
};

export default Section;
