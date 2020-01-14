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
