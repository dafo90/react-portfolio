import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import SocialButton from './SocialButton';

function SocialButtonsBar({ className, socials, iconSize }) {
    const visibleSocials = socials.filter(({ enabled }) => enabled);
    return visibleSocials.length ? (
        <Grid className={className} container justify="center" variant="body2" alignItems="center" spacing={1}>
            {visibleSocials.map(({ url, iconName, name: socialName, id }) => (
                <Grid key={id} item>
                    <SocialButton socialName={socialName} url={url} iconName={iconName} iconSize={iconSize} />
                </Grid>
            ))}
        </Grid>
    ) : null;
}

SocialButtonsBar.propTypes = {
    className: PropTypes.string,
    socials: PropTypes.array.isRequired,
    iconSize: PropTypes.string
};

SocialButtonsBar.defaultProps = {
    className: undefined,
    iconSize: '32px'
};

export default SocialButtonsBar;
