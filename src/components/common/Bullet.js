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

const Bullet = React.forwardRef(({ size, color, ...props }, ref) => {
    const classes = useStyles({ size, color });
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <div {...props} ref={ref} className={classes.root} />;
});

Bullet.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.string
};

Bullet.defaultProps = {
    size: '10px'
};

export default Bullet;
