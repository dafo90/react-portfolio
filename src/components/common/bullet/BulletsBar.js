import { Fade, Grid } from '@material-ui/core';
import { deepOrange, grey } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import React from 'react';

import Bullet from './Bullet';

const BulletsBar = React.forwardRef(({ className, bulletSize, level, startBulletsTransition, max, colorOffset, ...props }, ref) => {
    const bullets = [];
    for (let i = 0; i < max; i += 1) {
        bullets.push({ code: i, color: i < level ? deepOrange[500 + colorOffset] : grey[400] });
    }
    return startBulletsTransition ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Grid container variant="body2" justify="center" className={className} spacing={1} {...props} ref={ref}>
            {bullets.map(({ code, color }, index) => (
                <Grid key={code} item>
                    <Fade in={startBulletsTransition} timeout={index * index * index * 9}>
                        <Bullet color={color} size={bulletSize} />
                    </Fade>
                </Grid>
            ))}
        </Grid>
    ) : null;
});

BulletsBar.propTypes = {
    className: PropTypes.string,
    level: PropTypes.number.isRequired,
    bulletSize: PropTypes.string,
    startBulletsTransition: PropTypes.bool,
    max: PropTypes.number.isRequired,
    colorOffset: PropTypes.number,
};

BulletsBar.defaultProps = {
    className: undefined,
    bulletSize: '10px',
    startBulletsTransition: false,
    colorOffset: 0,
};

export default BulletsBar;
