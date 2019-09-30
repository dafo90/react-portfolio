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

function SocialButtonsBar({ socials }) {
    const classes = useStyles();
    if (!socials || socials.length === 0) {
        return undefined;
    }
    return (
        <div className={classes.root}>
            <Grid container justify="center" variant="body2" alignItems="center">
                {socials.map(({ url, iconName, name: socialName }) => (
                    <SocialButton key={socialName} socialName={socialName} url={url} iconName={iconName} />
                ))}
            </Grid>
        </div>
    );
}

SocialButtonsBar.propTypes = {
    socials: PropTypes.array.isRequired
};

export default SocialButtonsBar;
