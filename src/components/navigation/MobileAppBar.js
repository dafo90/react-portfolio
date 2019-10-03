import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons/';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    title: {
        width: '100%'
    }
}));

function MobileAppBar({ title, onMenuClick }) {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.root} color="inherit">
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={onMenuClick} className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                {title && (
                    <Typography variant="h6" noWrap align="center" className={classes.title}>
                        {title}
                    </Typography>
                )}
            </Toolbar>
        </AppBar>
    );
}

MobileAppBar.propTypes = {
    title: PropTypes.string,
    onMenuClick: PropTypes.func.isRequired
};

MobileAppBar.defaultProps = {
    title: undefined
};

export default MobileAppBar;
