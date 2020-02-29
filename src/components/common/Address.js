import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Address = ({ className, address }) => {
    return (
        <div className={className}>
            {address.street && (
                <Typography variant="body2" color="textSecondary" align="center">
                    {address.street}
                </Typography>
            )}
            {(address.zip || address.city) && (
                <Typography variant="body2" color="textSecondary" align="center">
                    {`${address.zip && `${address.zip} `}${address.city}`}
                </Typography>
            )}
            {address.state && (
                <Typography variant="body2" color="textSecondary" align="center">
                    {address.state}
                </Typography>
            )}
        </div>
    );
};

Address.propTypes = {
    className: PropTypes.string,
    address: PropTypes.object.isRequired
};

Address.defaultProps = {
    className: undefined
};

export default Address;
