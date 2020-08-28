import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from './Layout';

const useStyles = makeStyles((theme) => ({
    body: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
    },
}));

const LayoutBody = ({ children }) => {
    const classes = useStyles();
    return <Layout className={classes.body}>{children}</Layout>;
};

LayoutBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

LayoutBody.defaultProps = {
    children: undefined,
};

export default LayoutBody;
