import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import { useSelector } from 'react-redux';
import AboutMe from './layouts/aboutme/AboutMe';
import Resume from './layouts/resume/Resume';
import Projects from './layouts/projects/Projects';
import Skills from './layouts/skills/Skills';
import Contact from './layouts/contact/Contact';
import { layoutsConfigSelector } from '../store/selectors';

const components = {
    AboutMe,
    Resume,
    Projects,
    Skills,
    Contact,
};

const MainLayout = () => {
    const layouts = useSelector(layoutsConfigSelector);

    return (
        <ScrollToTop>
            <Switch>
                {layouts
                    .filter(({ enabled }) => enabled)
                    .map((layout) => {
                        const { code, componentName, urls } = layout;
                        const Component = components[componentName];
                        return (
                            <Route key={code} exact path={`(${urls.join('|')})`} render={() => <Component pageConf={layout} layouts={layouts} />} />
                        );
                    })}
            </Switch>
        </ScrollToTop>
    );
};

export default MainLayout;
