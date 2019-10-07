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
                    .map(({ id, component: Component, urls, content }) => (
                        <Route key={id} exact path={`(${urls.join('|')})`} render={() => <Component content={content} layouts={layouts} />} />
                    ))}
            </Switch>
        </Router>
    );
}

export default MainLayout;
