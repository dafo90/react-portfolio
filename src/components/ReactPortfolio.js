import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import CookieConsent from 'react-cookie-consent';
import Footer from './footer/Footer';
import MainLayout from './MainLayout';
import MobileAppBar from './navigation/MobileAppBar';
import MobileDrawer from './navigation/drawer/MobileDrawer';
import DesktopDrawer from './navigation/drawer/DesktopDrawer';

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
            <div className={classes.root}>
                {/* Mobile App bar */}
                <MobileAppBar />
                {/* Drawer Menu */}
                <nav className={classes.drawer}>
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
                    <Footer />
                </main>
            </div>
        </React.Fragment>
    );
};

export default ReactPortfolio;
