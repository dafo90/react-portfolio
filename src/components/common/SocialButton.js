import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { NotInterested } from '@material-ui/icons';
import {
    TiSocialFacebook,
    TiSocialInstagram,
    TiSocialGooglePlus,
    TiSocialGithub,
    TiSocialTwitter,
    TiSocialVimeo,
    TiSocialYoutube,
    TiSocialTumbler,
    TiSocialSkype,
    TiSocialPinterest,
    TiSocialLinkedin,
    TiSocialLastFm,
    TiSocialFlickr,
    TiSocialDribbble
} from 'react-icons/ti';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({ socialCircle: ({ iconSize }) => ({ width: iconSize, height: iconSize, margin: theme.spacing(0.5) }) }));

function SocialButton({ socialName, url, iconName, iconSize }) {
    const classes = useStyles({ iconSize });

    const findIconComponent = socialIconName => {
        switch (socialIconName.toLowerCase()) {
            case 'facebook':
                return <TiSocialFacebook />;
            case 'instagram':
                return <TiSocialInstagram />;
            case 'googleplus':
                return <TiSocialGooglePlus />;
            case 'github':
                return <TiSocialGithub />;
            case 'twitter':
                return <TiSocialTwitter />;
            case 'vimeo':
                return <TiSocialVimeo />;
            case 'youtube':
                return <TiSocialYoutube />;
            case 'tumbler':
                return <TiSocialTumbler />;
            case 'skype':
                return <TiSocialSkype />;
            case 'pinterest':
                return <TiSocialPinterest />;
            case 'linkedin':
                return <TiSocialLinkedin />;
            case 'lastfm':
                return <TiSocialLastFm />;
            case 'flickr':
                return <TiSocialFlickr />;
            case 'dribble':
                return <TiSocialDribbble />;
            default:
                return <NotInterested />;
        }
    };

    return (
        <Avatar component="a" alt={socialName} href={url} target="_blank" rel="noreferrer" className={classes.socialCircle}>
            {findIconComponent(iconName)}
        </Avatar>
    );
}

SocialButton.propTypes = {
    socialName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.number
};

SocialButton.defaultProps = {
    iconSize: '32px'
};

export default SocialButton;
