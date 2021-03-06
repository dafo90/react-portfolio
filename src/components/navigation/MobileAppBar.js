import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons/';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectedLayoutSelector } from '../../store/selectors';
import { openMobileDrawer } from '../../store/slices/navigation';

const useStyles = makeStyles((theme) => ({
    title: {
        paddingLeft: theme.spacing(1),
    },
}));

const MobileAppBar = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { title } = useSelector(selectedLayoutSelector);
    return (
        <AppBar position="fixed" color="inherit">
            <Toolbar>
                <IconButton color="inherit" edge="start" onClick={() => dispatch(openMobileDrawer())}>
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
