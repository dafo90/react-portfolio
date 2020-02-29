import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import layouts from '../configurations/layouts';
import history from '../routings/history';

const MainLayout = () => {
    return (
        <Router basename="/" history={history}>
            <ScrollToTop>
                <Switch>
                    {layouts
                        .filter(({ enabled }) => enabled)
                        .map(layout => {
                            const { id, component: Component, urls } = layout;
                            return (
                                <Route key={id} exact path={`(${urls.join('|')})`} render={() => <Component pageConf={layout} layouts={layouts} />} />
                            );
                        })}
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default MainLayout;
