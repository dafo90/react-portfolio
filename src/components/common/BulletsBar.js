import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Fade } from '@material-ui/core';
import uuid from 'uuid/v4';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Bullet from './Bullet';

const max = 6;
const prefixId = uuid();

const BulletsBar = React.forwardRef(({ className, bulletSize, level, startBulletsTransizion, isVisibleAfter, ...props }, ref) => {
    const bullets = [];
    for (let i = 0; i < max; i += 1) {
        bullets.push({ id: `${prefixId}${i}`, index: i, color: i < level ? deepOrange[700] : deepOrange[100] });
    }
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...props} ref={ref}>
            <Grid container variant="body2" justify="center" className={className} spacing={1}>
                {bullets.map(({ id, index, color }) => (
                    <Grid key={id} item>
                        <Fade
                            in={startBulletsTransizion}
                            style={{ transitionDelay: startBulletsTransizion ? `${isVisibleAfter + 400}ms` : '0ms' }}
                            timeout={index * index * index * 8}
                        >
                            <Bullet color={color} size={bulletSize} />
                        </Fade>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
});

BulletsBar.propTypes = {
    className: PropTypes.string,
    level: PropTypes.number.isRequired,
    bulletSize: PropTypes.string,
    startBulletsTransizion: PropTypes.bool,
    isVisibleAfter: PropTypes.number
};

BulletsBar.defaultProps = {
    className: undefined,
    bulletSize: '10px',
    startBulletsTransizion: false,
    isVisibleAfter: 0
};

export default BulletsBar;
