import { Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function Address({ className, address }) {
    return (
        <div className={className}>
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
    className: PropTypes.string,
    address: PropTypes.object.isRequired
};

Address.defaultProps = {
    className: ''
};

export default Address;
