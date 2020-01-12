import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Fade } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import Bullet from './Bullet';

const BulletsBar = React.forwardRef(({ className, bulletSize, level, startBulletsTransition, isVisibleAfter, max, colorOffset, ...props }, ref) => {
    const bullets = [];
    for (let i = 0; i < max; i += 1) {
        bullets.push({ id: i, color: i < level ? deepOrange[700 + colorOffset] : deepOrange[200 + colorOffset] });
    }
    return startBulletsTransition ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...props} ref={ref}>
            <Grid container variant="body2" justify="center" className={className} spacing={1}>
                {bullets.map(({ id, color }, index) => (
                    <Grid key={id} item>
                        <Fade in={startBulletsTransition} timeout={index * index * index * 9}>
                            <Bullet color={color} size={bulletSize} />
                        </Fade>
                    </Grid>
                ))}
            </Grid>
        </div>
    ) : (
        undefined
    );
});

BulletsBar.propTypes = {
    className: PropTypes.string,
    level: PropTypes.number.isRequired,
    bulletSize: PropTypes.string,
    startBulletsTransition: PropTypes.bool,
    isVisibleAfter: PropTypes.number,
    max: PropTypes.number.isRequired,
    colorOffset: PropTypes.number
};

BulletsBar.defaultProps = {
    className: undefined,
    bulletSize: '10px',
    startBulletsTransition: false,
    isVisibleAfter: 0,
    colorOffset: 0
};

export default BulletsBar;
