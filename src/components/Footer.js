import { Box, Container, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import packageJson from '../package.alias.json';

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

const PortfolioFooter = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.divider} />
            <Container maxWidth="sm" component="footer" className={classes.footer}>
                <Box mt={3}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
                        {'Copyright © '}
                        <Link color="inherit" href={packageJson.homepage} underline="always">
                            {packageJson.author}
                        </Link>
                        {` ${new Date().getFullYear()}.`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Theme inspired by the Lotus Type 79.
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default PortfolioFooter;
