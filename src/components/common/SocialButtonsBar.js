import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SocialButton from './SocialButton';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}));

function SocialButtonsBar({ socials, iconSize }) {
    const classes = useStyles();
    const visibleSocials = socials.filter(({ enabled }) => enabled);
    return (
        visibleSocials.length && (
            <div className={classes.root}>
                <Grid container justify="center" variant="body2" alignItems="center">
                    {visibleSocials.map(({ url, iconName, name: socialName }) => (
                        <SocialButton key={socialName} socialName={socialName} url={url} iconName={iconName} iconSize={iconSize} />
                    ))}
                </Grid>
            </div>
        )
    );
}

SocialButtonsBar.propTypes = {
    socials: PropTypes.array.isRequired,
    iconSize: PropTypes.number
};

SocialButtonsBar.defaultProps = {
    iconSize: 32
};

export default SocialButtonsBar;
