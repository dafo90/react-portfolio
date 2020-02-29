import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import NotFound from './components/NotFound';
import ReactPortfolio from './components/ReactPortfolio';
import layouts from './configurations/layouts';
import useFetchBaseData from './hooks/useFetchBaseData';
import history from './routings/history';

const App = () => {
    useFetchBaseData();
    return (
        <Router basename="/" history={history}>
            <ScrollToTop>
                <Switch>
                    <Route exact path={layouts.filter(({ urls }) => urls).flatMap(({ urls }) => urls)} component={ReactPortfolio} />
                    <Route component={NotFound} />
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;
