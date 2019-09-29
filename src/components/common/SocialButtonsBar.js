import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import SocialButton from './SocialButton';

function SocialButtonBar({ socials }) {
    if (!socials || socials.length === 0) {
        return undefined;
    }
    return (
        <React.Fragment>
            <Grid container justify="center" variant="body2" alignItems="center">
                {socials.map(({ url, iconName, name: socialName }) => (
                    <SocialButton key={socialName} socialName={socialName} url={url} iconName={iconName} />
                ))}
            </Grid>
        </React.Fragment>
    );
}

SocialButtonBar.propTypes = {
    socials: PropTypes.array.isRequired
};

export default SocialButtonBar;
