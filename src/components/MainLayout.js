import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import history from '../utils/history';
import layouts from '../configurations/layouts';

const MainLayout = () => {
    return (
        <Router history={history}>
            <ScrollToTop>
                <Switch>
                    {layouts
                        .filter(({ enabled }) => enabled)
                        .map(({ id, component: Component, urls, content }) => (
                            <Route key={id} exact path={`(${urls.join('|')})`} render={() => <Component content={content} layouts={layouts} />} />
                        ))}
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default MainLayout;
