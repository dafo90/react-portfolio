import { LinearProgress } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import NotFound from './components/NotFound';
import ReactPortfolio from './components/ReactPortfolio';
import useConfigurations from './hooks/useConfigurations';
import useWindowsLocation from './hooks/useWindowsLocation';

const App = () => {
    useWindowsLocation();
    const { isLoading, layouts } = useConfigurations();

    return isLoading ? (
        <LinearProgress />
    ) : (
        <ScrollToTop>
            <Switch>
                <Route exact path={layouts.filter(({ urls }) => urls).flatMap(({ urls }) => urls)} component={ReactPortfolio} />
                <Route component={NotFound} />
            </Switch>
        </ScrollToTop>
    );
};

export default App;
