import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import Footer from './footer/Footer';
import MainLayout from './MainLayout';
import MobileAppBar from './navigation/MobileAppBar';
import MobileDrawer from './navigation/drawer/MobileDrawer';
import DesktopDrawer from './navigation/drawer/DesktopDrawer';

const drawerWidth = '280px';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    toolbar: {
        ...theme.mixins.toolbar,
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    content: {
        flexGrow: 1
    }
}));

function Portfolio() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* Mobile App bar */}
            <MobileAppBar />

            {/* Drawer Menu */}
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* Drawer Mobile View */}
                <Hidden mdUp implementation="css">
                    <MobileDrawer maxWidth={drawerWidth} />
                </Hidden>
                {/* Drawer Desktop View */}
                <Hidden smDown implementation="css">
                    <DesktopDrawer width={drawerWidth} />
                </Hidden>
            </nav>

            {/* Main Layout */}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <MainLayout />
                <Footer className={classes.footer} />
            </main>
        </div>
    );
}

export default Portfolio;
