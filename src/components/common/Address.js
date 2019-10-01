import { Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1)
    }
}));

function Address({ address }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="body2" color="textSecondary" align="center">
                {address.street}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {`${address.zip} ${address.city}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {address.state}
            </Typography>
        </div>
    );
}

Address.propTypes = {
    address: PropTypes.object.isRequired
};

export default Address;
