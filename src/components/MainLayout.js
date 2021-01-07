import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import layouts from '../configurations/layouts';

const MainLayout = () => {
    return (
        <ScrollToTop>
            <Switch>
                {layouts
                    .filter(({ enabled }) => enabled)
                    .map((layout) => {
                        const { id, component: Component, urls } = layout;
                        return <Route key={id} exact path={`(${urls.join('|')})`} render={() => <Component pageConf={layout} layouts={layouts} />} />;
                    })}
            </Switch>
        </ScrollToTop>
    );
};

export default MainLayout;
