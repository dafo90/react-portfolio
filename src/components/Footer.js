import { Box, Container, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';

import packageJson from '../package.alias.json';
import { footerConfigSelector } from '../store/selectors';
import Interpreter from './common/Interpreter';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    divider: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 'auto',
        width: '60%',
        minWidth: '250px',
    },
    footer: {
        paddingBottom: theme.spacing(1),
    },
}));

const PortfolioFooter = () => {
    const classes = useStyles();
    const { copyrightName, text } = useSelector(footerConfigSelector);

    return (
        <Box className={classes.root}>
            <Box className={classes.divider} />
            <Container maxWidth="sm" component="footer" className={classes.footer}>
                <Box mt={3}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
                        {'Copyright © '}
                        <Link color="inherit" href={packageJson.homepage} underline="always">
                            {copyrightName || packageJson.author}
                        </Link>
                        {` ${new Date().getFullYear()}.`}
                    </Typography>
                    <Interpreter conf={text} />
                </Box>
            </Container>
        </Box>
    );
};

export default PortfolioFooter;
