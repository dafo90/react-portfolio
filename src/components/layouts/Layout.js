import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        margin: 'auto',
        [theme.breakpoints.only('xs')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            width: '100%'
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: '760px'
        },
        [theme.breakpoints.only('md')]: {
            maxWidth: '900px'
        },
        [theme.breakpoints.only('lg')]: {
            maxWidth: '1250px'
        },
        [theme.breakpoints.only('xl')]: {
            maxWidth: '1700px'
        }
    }
}));

function Layout({ children, className }) {
    const classes = useStyles();
    const rootClassName = classNames(classes.root, { [`${className}`]: className });
    return <div className={rootClassName}>{children}</div>;
}

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string
};

Layout.defaultProps = {
    children: undefined,
    className: undefined
};

export default Layout;
