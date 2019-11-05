import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import BulletsBar from '../BulletsBar';
import ArrowTooltip from '../ArrowTooltip';

const maxLevel = 6;
const transitionDelay = 500;

const useStyles = makeStyles(theme => ({
    cardMedia: ({ scale, transparentImage, zoomImage }) => ({
        opacity: transparentImage ? 0.2 : 1,
        transition: 'transform .5s ease',
        transform: zoomImage ? `scale(${scale})` : undefined
    }),
    imgBox: {
        overflow: 'hidden'
    },
    levelBar: {
        paddingBottom: theme.spacing(1)
    }
}));

const TileMainContent = ({ imageUrl, name, description, tooltip, level, scale, transparentImage, zoomImage, transitionIn }) => {
    const classes = useStyles({ scale, transparentImage, zoomImage });
    const [bulletsColorOffset, setBulletsColorOffset] = useState(0);
    return (
        <React.Fragment>
            {imageUrl && (
                <div className={classes.imgBox}>
                    <CardMedia className={classes.cardMedia} component="img" height="140" image={imageUrl} title={name} alt={name} />
                </div>
            )}
            <CardContent>
                <Grid container variant="h5" justify="space-between" alignItems="center">
                    <Grid xs item>
                        <Typography gutterBottom variant="h5" component="h5">
                            {name}
                        </Typography>
                    </Grid>
                    {level && (
                        <Grid xs="auto" item onMouseEnter={() => setBulletsColorOffset(200)} onMouseLeave={() => setBulletsColorOffset(0)}>
                            <ArrowTooltip
                                title={`${tooltip} (${level}/${maxLevel})`}
                                placement="top"
                                disableFocusListener={!tooltip}
                                disableHoverListener={!tooltip}
                                disableTouchListener={!tooltip}
                            >
                                <BulletsBar
                                    isVisibleAfter={transitionDelay}
                                    startBulletsTransition={transitionIn}
                                    className={classes.levelBar}
                                    level={level}
                                    max={maxLevel}
                                    colorOffset={bulletsColorOffset}
                                />
                            </ArrowTooltip>
                        </Grid>
                    )}
                </Grid>
                <Typography variant="body2" color="textSecondary" align="justify" component="p">
                    {description}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
};

TileMainContent.propTypes = {
    imageUrl: PropTypes.elementType,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    level: PropTypes.number,
    scale: PropTypes.number,
    transparentImage: PropTypes.bool,
    zoomImage: PropTypes.bool,
    transitionIn: PropTypes.bool
};

TileMainContent.defaultProps = {
    imageUrl: undefined,
    tooltip: undefined,
    level: undefined,
    scale: 1.3,
    transparentImage: false,
    zoomImage: false,
    transitionIn: false
};

export default TileMainContent;
