import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Section from '../Section';
import TileCard from './TileCard';

const useStyles = makeStyles(theme => ({
    tiles: {
        paddingTop: theme.spacing(2)
    }
}));

const TilesSection = ({ children, className, sectionTitle, sectionSubtitle, tiles, onlyMainTiles }) => {
    const classes = useStyles();
    const visibleTiles = tiles.filter(({ main = false, enabled = true }) => enabled && (!onlyMainTiles || main));
    return visibleTiles.length ? (
        <div className={className}>
            {sectionTitle && <Section title={sectionTitle} subtitle={sectionSubtitle} />}
            <Grid className={classes.tiles} container justify="center" spacing={3} alignItems="stretch" direction="row">
                {visibleTiles.map(({ id, imageUrl, tooltip, name, description, url, level, tags, transparentImage, share, demo }) => (
                    <Grid key={id} item>
                        <TileCard
                            tooltip={tooltip}
                            imageUrl={imageUrl}
                            name={name}
                            description={description}
                            url={url}
                            level={level}
                            tags={tags}
                            transparentImage={transparentImage}
                            share={share}
                            demo={demo}
                        />
                    </Grid>
                ))}
            </Grid>
            {children}
        </div>
    ) : null;
};

TilesSection.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionSubtitle: PropTypes.string,
    tiles: PropTypes.array.isRequired,
    onlyMainTiles: PropTypes.bool
};

TilesSection.defaultProps = {
    children: undefined,
    className: undefined,
    sectionTitle: undefined,
    sectionSubtitle: undefined,
    onlyMainTiles: false
};

export default TilesSection;
