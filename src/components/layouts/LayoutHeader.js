import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from './Layout';

const useStyles = makeStyles((theme) => ({
    root: {
        // background: theme.palette.secondary[50]
        background: theme.palette.background.paper,
    },
    header: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
    },
}));

const LayoutHeader = ({ children }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Layout className={classes.header}>{children}</Layout>
            </div>
            <Divider />
        </React.Fragment>
    );
};

LayoutHeader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

LayoutHeader.defaultProps = {
    children: undefined,
};

export default LayoutHeader;
