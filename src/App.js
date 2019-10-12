import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import layouts from './configurations/layouts';
import history from './utils/history';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';
import useFetchBaseData from './hooks/useFetchBaseData';

function App() {
    useFetchBaseData();
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path={`(${layouts
                        .filter(({ urls }) => urls)
                        .map(({ urls }) => urls.join('|'))
                        .join('|')})`}
                    component={Portfolio}
                />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
