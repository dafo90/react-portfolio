import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../utils/history';
import layouts from '../constants/layoutConstants';

function MainLayout() {
    return (
        <Router history={history}>
            <Switch>
                {layouts
                    .filter(({ enabled }) => enabled)
                    .map(({ label, component, urls }) => {
                        // Page not found - 404
                        if (!urls) return <Route key={label} component={component} />;

                        // More than one url for this page
                        if (urls.length > 0) return <Route key={label} path={`(${urls.join('|')})`} component={component} />;

                        // Url to page
                        return <Route key={label} exact path={urls[0]} component={component} />;
                    })}
            </Switch>
        </Router>
    );
}

export default MainLayout;
