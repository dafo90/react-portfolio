import { Button, Paper, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import React from 'react';

import layouts from '../configurations/layouts';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '250px',
        minHeight: '250px',
    },
    paper: {
        width: '80vw',
        minWidth: '200px',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        maxHeight: '400px',
        minHeight: '200px',
        [theme.breakpoints.up('xs')]: {
            height: '60vh',
        },
        [theme.breakpoints.up('sm')]: {
            height: '70vh',
        },
    },
    title: {
        fontWeight: 500,
        [theme.breakpoints.up('xs')]: {
            fontWeight: 300,
        },
        [theme.breakpoints.up('sm')]: {
            fontWeight: 400,
        },
        padding: theme.spacing(2),
    },
    errorMessage: {
        paddingBottom: theme.spacing(3),
    },
}));

const NotFound = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.only('xs'));
    const matchesSm = useMediaQuery(theme.breakpoints.only('sm'));
    const homepageUrl = layouts.find(({ homepage }) => homepage).urls[0];
    let titleVariant;
    if (matchesXs) titleVariant = 'h3';
    else if (matchesSm) titleVariant = 'h2';
    else titleVariant = 'h1';
    return (
        <div className={classes.root}>
            <Paper classes={{ root: classes.paper }}>
                <Typography variant={titleVariant} color="inherit" align="center" className={classes.title}>
                    Oops!
                </Typography>
                <Typography variant="body1" color="textSecondary" align="center" className={classes.errorMessage}>
                    404 - Page not found
                </Typography>
                <Button variant="contained" href={homepageUrl} size="large">
                    Go to homepage
                </Button>
            </Paper>
        </div>
    );
};

export default NotFound;
