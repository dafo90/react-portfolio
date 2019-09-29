// Only as example!!!

import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../utils/history';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%'
    }
}));

function PortfolioMainLayout() {
    const classes = useStyles();
    const layouts = undefined;
    return (
        <div className={classes.root}>
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
        </div>
    );
}

export default PortfolioMainLayout;
