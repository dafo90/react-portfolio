import { Container, Box, Divider } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    footer: {
        paddingBottom: theme.spacing(1)
    }
}));

function PortfolioFooter() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Divider variant="middle" />
            <Container maxWidth="sm" component="footer" className={classes.footer}>
                <Box mt={3}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}

export default PortfolioFooter;
