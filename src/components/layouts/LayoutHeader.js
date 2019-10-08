import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        // background: theme.palette.secondary[50]
        background: theme.palette.background.paper
    }
}));

function LayoutHeader({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {children}
            <Divider />
        </div>
    );
}

LayoutHeader.propTypes = {
    children: PropTypes.object
};

LayoutHeader.defaultProps = {
    children: undefined
};

export default LayoutHeader;
