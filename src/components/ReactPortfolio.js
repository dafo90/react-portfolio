import { Box, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CookieConsent from 'react-cookie-consent';

import Footer from './Footer';
import MainLayout from './MainLayout';
import DesktopDrawer from './navigation/drawer/DesktopDrawer';
import MobileDrawer from './navigation/drawer/MobileDrawer';
import MobileAppBar from './navigation/MobileAppBar';

const cookieName = 'ReactPortfolio';
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

const ReactPortfolio = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CookieConsent style={{ zIndex: 100000, backgroundColor: 'black' }} cookieName={cookieName}>
                This website uses cookies to enhance the user experience.
            </CookieConsent>
            <Box className={classes.root}>
                <Hidden mdUp implementation="js">
                    <MobileAppBar />
                </Hidden>

                <nav className={classes.drawer}>
                    <Hidden mdUp implementation="js">
                        <MobileDrawer maxWidth={drawerWidth} />
                    </Hidden>
                    <Hidden smDown implementation="js">
                        <DesktopDrawer width={drawerWidth} />
                    </Hidden>
                </nav>

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <MainLayout />
                    <Footer />
                </main>
            </Box>
        </React.Fragment>
    );
};

export default ReactPortfolio;
