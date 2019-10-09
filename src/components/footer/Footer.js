import { Container, Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    divider: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 'auto',
        width: '60%',
        minWidth: '250px'
    },
    footer: {
        paddingBottom: theme.spacing(1)
    }
}));

function PortfolioFooter() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.divider} />
            <Container maxWidth="sm" component="footer" className={classes.footer}>
                <Box mt={3}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}

export default PortfolioFooter;
