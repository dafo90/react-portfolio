import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Link, Grid, Tooltip, Zoom } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import useIsInViewport from 'use-is-in-viewport';
import BulletsBar from './BulletsBar';

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

const logo = (className, iconUrl, name) => <img className={className} src={iconUrl} alt={name} />;

function TileBox({ iconUrl, name, description, level, url }) {
    const classes = useStyles();
    const [isTileInViewport, tilePaper] = useIsInViewport();
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div ref={tilePaper}>
            <Zoom in={isTileInViewport} direction="up" style={{ transitionDelay: isTileInViewport ? `${transitionDelay}ms` : '0ms' }} timeout={300}>
                <Paper className={classes.root}>
                    <Grid container variant="body2" justify="space-between" alignItems="center">
                        <Grid xs item>
                            <Typography className={classes.name} variant="h5" align="left">
                                {name}
                            </Typography>
                        </Grid>
                        {level && (
                            <Grid xs="auto" item>
                                <Tooltip title="Knowledge level" enterDelay={300} leaveDelay={300} placement="top">
                                    <BulletsBar
                                        isVisibleAfter={transitionDelay}
                                        startBulletsTransizion={isTileInViewport}
                                        className={classes.levelBar}
                                        level={level}
                                    />
                                </Tooltip>
                            </Grid>
                        )}
                    </Grid>
                    <Grid container variant="body2" justify="space-between" alignItems="center" spacing={2}>
                        {iconUrl && (
                            <Grid xs="auto" item>
                                {url ? (
                                    <Link href={url} component="a" target="_blank" rel="noreferrer">
                                        <div className={classes.logoHoverZoom}>{logo(classes.logo, iconUrl, name)}</div>
                                    </Link>
                                ) : (
                                    logo(classes.logo, iconUrl, name)
                                )}
                            </Grid>
                        )}
                        <Grid xs item>
                            <Typography variant="body2" align="justify">
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Zoom>
        </div>
    );
}

TileBox.propTypes = {
    iconUrl: PropTypes.elementType,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    level: PropTypes.number,
    url: PropTypes.string
};

TileBox.defaultProps = {
    iconUrl: undefined,
    level: undefined,
    url: undefined
};

export default TileBox;
