import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height: '80vh',
        maxHeight: '400px',
        width: '80vw',
        maxWidth: '500px',
        borderStyle: 'outset',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(6)
    },
    title: {
        fontWeight: 500,
        padding: theme.spacing(2)
    },
    errorMessage: {
        paddingBottom: theme.spacing(4)
    }
}));

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper classes={{ root: classes.container }}>
                <Typography variant="h1" color="inherit" align="center" className={classes.title}>
                    Oops!
                </Typography>
                <Typography variant="button" color="textSecondary" align="center" className={classes.errorMessage}>
                    404 - Page not found
                </Typography>
                <Button variant="contained" component={Link} to="/" size="large">
                    <Typography variant="button" align="center">
                        Go to homepage
                    </Typography>
                </Button>
            </Paper>
        </div>
    );
};

export default NotFound;
