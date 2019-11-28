import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, Slide, Snackbar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Footer from './footer/Footer';
import MainLayout from './MainLayout';
import MobileAppBar from './navigation/MobileAppBar';
import MobileDrawer from './navigation/drawer/MobileDrawer';
import DesktopDrawer from './navigation/drawer/DesktopDrawer';
import SnackbarContentWrapper from './common/SnackbarContentWrapper';
import { closeSnackbar } from '../actions/actions';

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

// eslint-disable-next-line react/jsx-props-no-spreading
const TransitionDown = props => <Slide {...props} direction="down" />;

const Portfolio = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const isSnackbarOpen = useSelector(state => state.openSnackbar);
    const snackbarVariant = useSelector(state => state.snackbarVariant);
    const snackbarMessage = useSelector(state => state.snackbarMessage);

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        dispatch(closeSnackbar());
    };

    return (
        <React.Fragment>
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
                    <Footer className={classes.footer} />
                </main>
            </div>
            <Snackbar
                TransitionComponent={TransitionDown}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={isSnackbarOpen}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
            >
                <SnackbarContentWrapper variant={snackbarVariant} message={snackbarMessage} onClose={handleCloseSnackbar} />
            </Snackbar>
        </React.Fragment>
    );
};

export default Portfolio;
