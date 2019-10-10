import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
    root: ({ size, color }) => ({
        width: size,
        height: size,
        borderRadius: '50%',
        background: color
    })
}));

function Bullet({ size, color }) {
    const classes = useStyles({ size, color });
    return <div className={classes.root} />;
}

Bullet.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.string
};

Bullet.defaultProps = {
    size: '10px'
};

export default Bullet;
