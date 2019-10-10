import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Section from './Section';
import TileBox from './TileBox';

const useStyles = makeStyles(theme => ({
    tiles: {
        paddingTop: theme.spacing(2)
    }
}));

function TilesSection({ children, className, sectionTitle, sectionSubtitle, tiles, onlyMainTiles }) {
    const classes = useStyles();
    const visibleTiles = tiles.filter(({ main = false, enabled = true }) => enabled && (!onlyMainTiles || main));
    return visibleTiles.length ? (
        <div className={className}>
            <Section title={sectionTitle} subtitle={sectionSubtitle} />
            <Grid className={classes.tiles} container variant="body2" justify="center" spacing={3}>
                {visibleTiles.map(({ id, iconUrl, name, description, url, level }) => (
                    <Grid key={id} item>
                        <TileBox iconUrl={iconUrl} name={name} description={description} url={url} level={level} />
                    </Grid>
                ))}
            </Grid>
            {children}
        </div>
    ) : null;
}

TilesSection.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    sectionTitle: PropTypes.string.isRequired,
    sectionSubtitle: PropTypes.string,
    tiles: PropTypes.array.isRequired,
    onlyMainTiles: PropTypes.bool
};

TilesSection.defaultProps = {
    children: undefined,
    className: undefined,
    sectionSubtitle: undefined,
    onlyMainTiles: false
};

export default TilesSection;