import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import layouts from './components/layouts';
import history from './utils/history';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1, 1.5)
    }
}));

function App() {
    const classes = useStyles();
    const currentUrl = history.location.pathname;
    const isHomepage = !currentUrl || currentUrl === '/';
    const currentLayout = layouts
        .filter(({ buttonName, visible }) => buttonName && visible)
        .find(({ url, homepage }) => (isHomepage && homepage) || url === currentUrl);
    const defaultAppBarTitle = currentLayout ? currentLayout.name : '';
    const [appBarTitle, setAppBarTitle] = useState(defaultAppBarTitle);
    return (
        <React.Fragment>
            <AppBar position="static" color="default">
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
            <Router history={history}>
                <Switch>
                    {layouts
                        .filter(({ visible }) => visible)
                        .map(({ id, component, homepage, notFoundPage, url }) => {
                            if (homepage) return <Route key={id} path={`(${url}|/)`} component={component} />;
                            if (notFoundPage) return <Route key={id} component={component} />;
                            return <Route key={id} exact path={url} component={component} />;
                        })}
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
