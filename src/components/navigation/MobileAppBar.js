import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons/';
import { openMobileDrawer } from '../../redux/actions/actions';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    title: {
        paddingLeft: theme.spacing(1)
    }
}));

const MobileAppBar = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { title } = useSelector(state => state.layout);
    return (
        <AppBar position="fixed" className={classes.root} color="inherit">
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={() => dispatch(openMobileDrawer())}>
                    <MenuIcon />
                </IconButton>
                {title && (
                    <Typography variant="h6" noWrap className={classes.title}>
                        {title}
                    </Typography>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default MobileAppBar;
