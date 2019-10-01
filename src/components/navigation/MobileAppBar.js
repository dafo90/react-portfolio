import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons/';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}));

function MobileAppBar({ onMenuClick }) {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.root} color="inherit">
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={onMenuClick} className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Responsive drawer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

MobileAppBar.propTypes = {
    onMenuClick: PropTypes.func.isRequired
};

export default MobileAppBar;
