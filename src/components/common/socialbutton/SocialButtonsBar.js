import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import SocialButton from './SocialButton';

const SocialButtonsBar = ({ className, socials, iconSize }) => {
    const visibleSocials = socials.filter(({ enabled = false }) => enabled);
    return visibleSocials.length ? (
        <Grid className={className} container justify="center" variant="body2" alignItems="center" spacing={1}>
            {visibleSocials.map(({ url, icon, name: socialName, id }) => (
                <Grid key={id} item>
                    <SocialButton tooltip={socialName} socialName={socialName} url={url} icon={icon} iconSize={iconSize} />
                </Grid>
            ))}
        </Grid>
    ) : null;
};

SocialButtonsBar.propTypes = {
    className: PropTypes.string,
    socials: PropTypes.array.isRequired,
    iconSize: PropTypes.string,
};

SocialButtonsBar.defaultProps = {
    className: undefined,
    iconSize: '32px',
};

export default SocialButtonsBar;
