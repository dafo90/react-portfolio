import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../utils/history';
import layouts from './layouts/layoutConstants';

function PortfolioMainLayout() {
    return (
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
    );
}

export default PortfolioMainLayout;
