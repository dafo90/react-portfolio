import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import history from '../../utils/history';
import layouts from '../layouts/layoutConstants';

const useStyles = makeStyles(theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbar: {
        flexWrap: 'wrap'
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1, 1.5)
    }
}));

function PortfolioAppBar() {
    const classes = useStyles();
    const currentUrl = history.location.pathname;
    const isHomepage = !currentUrl || currentUrl === '/';
    const currentLayout = layouts
        .filter(({ buttonName, visible }) => buttonName && visible)
        .find(({ url, homepage }) => (isHomepage && homepage) || url === currentUrl);
    const defaultAppBarTitle = currentLayout ? currentLayout.name : '';
    const [appBarTitle, setAppBarTitle] = useState(defaultAppBarTitle);
    return (
        <AppBar position="static" color="default" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    {appBarTitle}
                </Typography>
                <nav>
                    {layouts
                        .filter(({ buttonName, visible }) => buttonName && visible)
                        .map(({ id, name, buttonName, url }) => {
                            return (
                                <Link
                                    key={id}
                                    variant="button"
                                    color="textPrimary"
                                    to={url}
                                    className={classes.link}
                                    onClick={() => {
                                        history.push(url);
                                        setAppBarTitle(name);
                                    }}
                                >
                                    {buttonName}
                                </Link>
                            );
                        })}
                </nav>
            </Toolbar>
        </AppBar>
    );
}

export default PortfolioAppBar;
