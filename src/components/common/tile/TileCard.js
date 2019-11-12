import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardActionArea, Link, Grid, Zoom, Chip, CardActions, Button } from '@material-ui/core';
import useIsInViewport from 'use-is-in-viewport';
import ArrowTooltip from '../ArrowTooltip';
import TileMainContent from './TileMainContent';

const transitionDelay = 500;

const useStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.only('xs')]: {
            maxWidth: '250px'
        },
        [theme.breakpoints.only('sm')]: {
            width: '300px'
        },
        [theme.breakpoints.up('md')]: {
            width: '350px'
        }
    },
    footer: {
        marginTop: 'auto'
    }
}));

const TileCard = ({ imageUrl, name, description, tooltip, level, url, hyperlinkTitle, tags, transparentImage, share, demo }) => {
    const classes = useStyles({ transparentImage });
    const [isTileInViewport, tilePaper] = useIsInViewport();
    const [transitionIn, setTransitionIn] = useState(false);
    const [zoomImage, setZoomImage] = useState(false);
    useEffect(() => {
        if (isTileInViewport) setTransitionIn(true);
    }, [isTileInViewport]);
    return (
        <Zoom in={transitionIn} direction="up" style={{ transitionDelay: transitionIn ? `${transitionDelay}ms` : '0ms' }} timeout={300}>
            <Card ref={tilePaper} className={classes.card}>
                {url ? (
                    <CardActionArea onMouseEnter={() => setZoomImage(true)} onMouseLeave={() => setZoomImage(false)}>
                        <Link color="inherit" underline="none" component="a" target="_blank" rel="noreferrer" href={hyperlinkTitle ? url : undefined}>
                            <TileMainContent
                                imageUrl={imageUrl}
                                name={name}
                                description={description}
                                tooltip={tooltip}
                                level={level}
                                transparentImage={transparentImage}
                                transitionIn={transitionIn}
                                zoomImage={zoomImage}
                            />
                        </Link>
                    </CardActionArea>
                ) : (
                    <TileMainContent
                        imageUrl={imageUrl}
                        name={name}
                        description={description}
                        tooltip={tooltip}
                        level={level}
                        transparentImage={transparentImage}
                        transitionIn={transitionIn}
                        className={classes.content}
                    />
                )}
                <div className={classes.footer}>
                    {tags && tags.length && (
                        <CardContent>
                            <Grid container variant="body2" alignItems="center" spacing={1}>
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
                        </CardContent>
                    )}
                    {((share && share.length) || demo) && (
                        <CardActions className={classes.actions}>
                            {share &&
                                share.length &&
                                share.map(({ socialButton: SocialButton, key, icon: Icon }) => (
                                    <SocialButton key={key} url={url}>
                                        <Icon />
                                    </SocialButton>
                                ))}
                            {demo && (
                                <Button size="small" color="primary">
                                    Demo
                                </Button>
                            )}
                        </CardActions>
                    )}
                </div>
            </Card>
        </Zoom>
    );
};

TileCard.propTypes = {
    imageUrl: PropTypes.elementType,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    level: PropTypes.number,
    url: PropTypes.string,
    hyperlinkTitle: PropTypes.bool,
    tags: PropTypes.array,
    transparentImage: PropTypes.bool,
    share: PropTypes.array,
    demo: PropTypes.string
};

TileCard.defaultProps = {
    imageUrl: undefined,
    tooltip: undefined,
    level: undefined,
    url: undefined,
    hyperlinkTitle: false,
    tags: undefined,
    transparentImage: false,
    share: undefined,
    demo: undefined
};

export default TileCard;
