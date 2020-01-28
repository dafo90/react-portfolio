import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import layouts from './configurations/layouts';
import history from './utils/history';
import ReactPortfolio from './components/ReactPortfolio';
import NotFound from './components/NotFound';
import useFetchBaseData from './hooks/useFetchBaseData';

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
