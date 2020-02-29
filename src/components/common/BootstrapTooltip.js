import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

const useStylesBootstrap = makeStyles(theme => ({
    arrow: {
        color: theme.palette.common.black
    },
    tooltip: {
        backgroundColor: theme.palette.common.black
    }
}));

const BootstrapTooltip = ({ ...props }) => {
    const classes = useStylesBootstrap();

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Tooltip arrow classes={classes} {...props} />;
};

export default BootstrapTooltip;
