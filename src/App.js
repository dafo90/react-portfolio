import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import layouts from './constants/layoutConstants';
import history from './utils/history';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';

function App() {
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
