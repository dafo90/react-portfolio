import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Link, Grid, Zoom, Chip } from '@material-ui/core';
import useIsInViewport from 'use-is-in-viewport';
import BulletsBar from './BulletsBar';
import ArrowTooltip from './ArrowTooltip';
import LinkImg from './LinkImg';

const maxLevel = 6;
const logoRadius = '3px';
const logoWidth = '60px';
const transitionDelay = 500;

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '350px',
        padding: theme.spacing(2)
    },
    logoHoverZoom: {
        maxWidth: logoWidth,
        borderRadius: logoRadius
    },
    logo: {
        maxWidth: logoWidth,
        borderRadius: logoRadius
    },
    name: {
        paddingBottom: theme.spacing(1)
    },
    levelBar: {
        paddingBottom: theme.spacing(1)
    },
    tags: {
        paddingTop: theme.spacing(1)
    }
}));

function TileBox({ imageUrl, name, description, tooltip, level, url, hyperlinkTitle, tags, transparentImage }) {
    const classes = useStyles({ transparentImage });
    const [isTileInViewport, tilePaper] = useIsInViewport();
    const [bulletsColorOffset, setBulletsColorOffset] = useState(0);
    const [transitionIn, setTransitionIn] = useState(false);
    useEffect(() => {
        if (isTileInViewport) setTransitionIn(true);
    }, [isTileInViewport]);
    return (
        <div ref={tilePaper}>
            <Zoom in={transitionIn} direction="up" style={{ transitionDelay: transitionIn ? `${transitionDelay}ms` : '0ms' }} timeout={300}>
                <Paper className={classes.root}>
                    <Grid container variant="body2" justify="space-between" alignItems="center">
                        <Grid xs item>
                            <Typography className={classes.name} variant="h5" align="left">
                                <Link
                                    color="inherit"
                                    underline={hyperlinkTitle ? 'hover' : 'none'}
                                    component="a"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={hyperlinkTitle ? url : undefined}
                                >
                                    {name}
                                </Link>
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
                                        startBulletsTransizion={transitionIn}
                                        className={classes.levelBar}
                                        level={level}
                                        max={maxLevel}
                                        colorOffset={bulletsColorOffset}
                                    />
                                </ArrowTooltip>
                            </Grid>
                        )}
                    </Grid>
                    <Grid container variant="body2" justify="space-between" alignItems="center" spacing={2}>
                        {imageUrl && (
                            <Grid xs="auto" item>
                                <LinkImg
                                    imgClassName={classes.logo}
                                    imgBoxClassName={classes.logoHoverZoom}
                                    src={imageUrl}
                                    alt={name}
                                    href={url}
                                    transparentImage={transparentImage}
                                />
                            </Grid>
                        )}
                        <Grid xs item>
                            <Typography variant="body2" align="justify">
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                    {tags && tags.length && (
                        <Grid className={classes.tags} container variant="body2" alignItems="center" spacing={1}>
                            {tags.map(({ id, text, icon: Icon, variant, color, url: tagUrl, tooltip: tagTooltip }) => (
                                <Grid key={id} item>
                                    <ArrowTooltip
                                        title={tagTooltip || '-'}
                                        placement="bottom"
                                        disableFocusListener={!tagTooltip}
                                        disableHoverListener={!tagTooltip}
                                        disableTouchListener={!tagTooltip}
                                    >
                                        <Chip
                                            label={text}
                                            icon={<Icon />}
                                            size="small"
                                            component={tagUrl && 'a'}
                                            target={tagUrl && '_blank'}
                                            rel={tagUrl && 'noreferrer'}
                                            href={tagUrl}
                                            clickable={!!tagUrl}
                                            variant={variant}
                                            color={color}
                                        />
                                    </ArrowTooltip>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Paper>
            </Zoom>
        </div>
    );
}

TileBox.propTypes = {
    imageUrl: PropTypes.elementType,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    level: PropTypes.number,
    url: PropTypes.string,
    hyperlinkTitle: PropTypes.bool,
    tags: PropTypes.array,
    transparentImage: PropTypes.bool
};

TileBox.defaultProps = {
    imageUrl: undefined,
    tooltip: undefined,
    level: undefined,
    url: undefined,
    hyperlinkTitle: false,
    tags: undefined,
    transparentImage: false
};

export default TileBox;
