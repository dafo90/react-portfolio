import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6)
        }
    }
}));

function PortfolioFooter() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default PortfolioFooter;
