import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Link, Grid, Tooltip, Zoom, Chip } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import useIsInViewport from 'use-is-in-viewport';
import BulletsBar from './BulletsBar';

const maxLevel = 6;
const logoRadius = '3px';
const logoWidth = '60px';
const transitionDelay = 400;

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '350px',
        padding: theme.spacing(2)
    },
    logoHoverZoom: {
        background: grey[300],
        border: `1px solid ${theme.palette.divider}`,
        maxWidth: logoWidth,
        overflow: 'hidden',
        borderRadius: logoRadius
    },
    logo: {
        maxWidth: logoWidth,
        objectPosition: 'center',
        objectFit: 'cover',
        verticalAlign: 'middle',
        borderRadius: logoRadius,
        transition: 'transform .5s ease',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    },
    name: {
        paddingBottom: theme.spacing(1)
    },
    levelBar: {
        paddingBottom: theme.spacing(1)
    }
}));

const logo = (className, imageUrl, name) => <img className={className} src={imageUrl} alt={name} />;
const bullet = (classes, isTileInViewport, level, colorOffset) => (
    <BulletsBar
        isVisibleAfter={transitionDelay}
        startBulletsTransizion={isTileInViewport}
        className={classes.levelBar}
        level={level}
        max={maxLevel}
        colorOffset={colorOffset}
    />
);

function TileBox({ imageUrl, name, description, tooltip, level, url, hyperlinkTitle, tags }) {
    const classes = useStyles();
    const [isTileInViewport, tilePaper] = useIsInViewport();
    const [bulletsColorOffset, setBulletsColorOffset] = useState(0);
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div ref={tilePaper}>
            <Zoom in={isTileInViewport} direction="up" style={{ transitionDelay: isTileInViewport ? `${transitionDelay}ms` : '0ms' }} timeout={300}>
                <Paper className={classes.root}>
                    <Grid container variant="body2" justify="space-between" alignItems="center">
                        <Grid xs item>
                            <Typography className={classes.name} variant="h5" align="left">
                                {hyperlinkTitle ? (
                                    <Link href={url} color="inherit" component="a" target="_blank" rel="noreferrer">
                                        {name}
                                    </Link>
                                ) : (
                                    name
                                )}
                            </Typography>
                        </Grid>
                        {level && (
                            <Grid
                                xs="auto"
                                item
                                onMouseOver={() => setBulletsColorOffset(200)}
                                onFocus={() => setBulletsColorOffset(200)}
                                onMouseOut={() => setBulletsColorOffset(0)}
                                onBlur={() => setBulletsColorOffset(0)}
                            >
                                {tooltip ? (
                                    <Tooltip title={`${tooltip} (${level}/${maxLevel})`} enterDelay={300} leaveDelay={300} placement="top">
                                        {bullet(classes, isTileInViewport, level, bulletsColorOffset)}
                                    </Tooltip>
                                ) : (
                                    bullet(classes, isTileInViewport, level, bulletsColorOffset)
                                )}
                            </Grid>
                        )}
                    </Grid>
                    <Grid container variant="body2" justify="space-between" alignItems="center" spacing={2}>
                        {imageUrl && (
                            <Grid xs="auto" item>
                                {url ? (
                                    <Link href={url} component="a" target="_blank" rel="noreferrer">
                                        <div className={classes.logoHoverZoom}>{logo(classes.logo, imageUrl, name)}</div>
                                    </Link>
                                ) : (
                                    logo(classes.logo, imageUrl, name)
                                )}
                            </Grid>
                        )}
                        <Grid xs item>
                            <Typography variant="body2" align="justify">
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                    {tags && tags.length && (
                        <Grid container variant="body2" alignItems="center" spacing={1}>
                            {tags.map(({ id, text, icon: Icon, variant, color, url: tagUrl }) => (
                                <Grid key={id} item>
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
    tags: PropTypes.array
};

TileBox.defaultProps = {
    imageUrl: undefined,
    tooltip: undefined,
    level: undefined,
    url: undefined,
    hyperlinkTitle: false,
    tags: undefined
};

export default TileBox;
