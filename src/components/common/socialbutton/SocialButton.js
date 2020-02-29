import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import BootstrapTooltip from '../BootstrapTooltip';

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

const SocialButton = ({ tooltip, socialName, url, icon: Icon, iconSize }) => {
    const classes = useStyles({ iconSize });
    return (
        <BootstrapTooltip
            arrow
            title={tooltip}
            placement="bottom"
            disableFocusListener={!tooltip}
            disableHoverListener={!tooltip}
            disableTouchListener={!tooltip}
        >
            <Avatar className={classes.socialCircle} component="a" alt={socialName} href={url} target="_blank" rel="noreferrer">
                <Icon />
            </Avatar>
        </BootstrapTooltip>
    );
};

SocialButton.propTypes = {
    tooltip: PropTypes.string,
    socialName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    iconSize: PropTypes.string
};

SocialButton.defaultProps = {
    tooltip: undefined,
    iconSize: '32px'
};

export default SocialButton;
