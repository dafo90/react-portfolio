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
import ArrowTooltip from './ArrowTooltip';

const useStyles = makeStyles(theme => ({
    socialCircle: ({ iconSize }) => ({
        width: iconSize,
        height: iconSize,
        background: theme.palette.primary.light,
        fontSize: `${Number(iconSize.replace(/\D+/g, '')) / 1.6}px`,
        transition: '.2s ease',
        '&:hover': {
            background: theme.palette.primary.main,
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

const SocialButton = ({ tooltip, socialName, url, iconName, iconSize }) => {
    const classes = useStyles({ iconSize });
    return (
        <ArrowTooltip
            title={tooltip}
            placement="bottom"
            disableFocusListener={!tooltip}
            disableHoverListener={!tooltip}
            disableTouchListener={!tooltip}
        >
            <Avatar className={classes.socialCircle} component="a" alt={socialName} href={url} target="_blank" rel="noreferrer">
                {findIconComponent(iconName)}
            </Avatar>
        </ArrowTooltip>
    );
};

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
