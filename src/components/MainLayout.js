import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../utils/history';
import layouts from '../configurations/layouts';

function MainLayout() {
    return (
        <Router history={history}>
            <Switch>
                {layouts
                    .filter(({ enabled }) => enabled)
                    .map(({ label, component: Component, urls, content }) => {
                        // More than one url for this page
                        if (urls.length) return <Route key={label} path={`(${urls.join('|')})`} render={() => <Component content={content} />} />;

                        // Url to page
                        return <Route key={label} exact path={urls[0]} render={() => <Component content={content} />} />;
                    })}
            </Switch>
        </Router>
    );
}

export default MainLayout;
