import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import Footer from './components/footer/Footer';
import MainLayout from './components/MainLayout';
import MobileAppBar from './components/navigation/MobileAppBar';
import MobileDrawer from './components/navigation/drawer/MobileDrawer';
import DesktopDrawer from './components/navigation/drawer/DesktopDrawer';

const drawerWidth = '280px';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    toolbar: {
        ...theme.mixins.toolbar,
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

function App() {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <div className={classes.root}>
            {/* Mobile App bar */}
            <MobileAppBar onMenuClick={() => setMobileOpen(true)} />

            {/* Drawer Menu */}
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* Drawer Mobile View */}
                <Hidden smUp implementation="css">
                    <MobileDrawer closeDrawer={() => setMobileOpen(false)} open={mobileOpen} maxWidth={drawerWidth} />
                </Hidden>
                {/* Drawer Desktop View */}
                <Hidden xsDown implementation="css">
                    <DesktopDrawer closeDrawer={() => setMobileOpen(false)} width={drawerWidth} />
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

export default App;
