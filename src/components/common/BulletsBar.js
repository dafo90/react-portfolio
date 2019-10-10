import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import uuid from 'uuid/v4';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Bullet from './Bullet';

const max = 6;
const prefixId = uuid();

const BulletsBar = React.forwardRef(({ className, bulletSize, level, ...props }, ref) => {
    const bullets = [];
    for (let i = 0; i < max; i += 1) {
        bullets.push({ id: `${prefixId}${i}`, color: i < level ? deepOrange[700] : deepOrange[100] });
    }
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...props} ref={ref}>
            <Grid container variant="body2" justify="center" className={className} spacing={1}>
                {bullets.map(({ id, color }) => (
                    <Grid key={id} item>
                        <Bullet color={color} size={bulletSize} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
});

BulletsBar.propTypes = {
    className: PropTypes.string,
    level: PropTypes.number.isRequired,
    bulletSize: PropTypes.string
};

BulletsBar.defaultProps = {
    className: undefined,
    bulletSize: '10px'
};

export default BulletsBar;
