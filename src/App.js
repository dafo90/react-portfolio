import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import NotFound from './components/NotFound';
import ReactPortfolio from './components/ReactPortfolio';
import layouts from './configurations/layouts';
import useWindowsLocation from './hooks/useWindowsLocation';

const App = () => {
    useWindowsLocation();
    return (
        <ScrollToTop>
            <Switch>
                <Route exact path={layouts.filter(({ urls }) => urls).flatMap(({ urls }) => urls)} component={ReactPortfolio} />
                <Route component={NotFound} />
            </Switch>
        </ScrollToTop>
    );
};

export default App;
