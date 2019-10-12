import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Avatar } from '@material-ui/core';
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

const useStyles = makeStyles(theme => ({
    socialCircle: ({ iconSize }) => ({
        width: iconSize,
        height: iconSize,
        background: theme.palette.secondary.light,
        fontSize: `${Number(iconSize.replace(/\D+/g, '')) / 1.6}px`,
        transition: '.2s ease',
        '&:hover': {
            background: theme.palette.secondary.main,
            fontSize: `${Number(iconSize.replace(/\D+/g, '')) / 1.4}px`
        }
    })
}));

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

const socialBullet = (classes, socialName, url, iconName) => (
    <Avatar component="a" alt={socialName} href={url} target="_blank" rel="noreferrer" className={classes.socialCircle}>
        {findIconComponent(iconName)}
    </Avatar>
);

function SocialButton({ tooltip, socialName, url, iconName, iconSize }) {
    const classes = useStyles({ iconSize });
    return tooltip ? (
        <Tooltip title={tooltip} enterDelay={300} leaveDelay={300} placement="bottom">
            {socialBullet(classes, socialName, url, iconName)}
        </Tooltip>
    ) : (
        socialBullet(classes, socialName, url, iconName)
    );
}

SocialButton.propTypes = {
    tooltip: PropTypes.string,
    socialName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.string
};

SocialButton.defaultProps = {
    tooltip: undefined,
    iconSize: '32px'
};

export default SocialButton;
