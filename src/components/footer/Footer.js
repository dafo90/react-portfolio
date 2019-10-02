import { Container, Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1)
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(1),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(0.5),
            paddingBottom: theme.spacing(0.5)
        }
    }
}));

function PortfolioFooter() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="sm" component="footer" className={classes.footer}>
                <Box mt={3}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}

export default PortfolioFooter;
