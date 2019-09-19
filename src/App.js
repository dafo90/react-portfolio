import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/404';
import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Projects from './components/projects';
import Resume from './components/resume';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/aboutme" />} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects" component={Projects} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
