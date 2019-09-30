import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../utils/history';

const useStyles = makeStyles(() => ({
    root: {
        // height: '100%'
    }
}));

function MainLayout({ layouts }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Router history={history}>
                <Switch>
                    {layouts
                        .filter(({ visible }) => visible)
                        .map(({ label, component, urls }) => {
                            // Page not found - 404
                            if (!urls) return <Route key={label} component={component} />;

                            // More than one url for this page
                            if (urls.length > 0) return <Route key={label} path={`(${urls.join('|')})`} component={component} />;

                            // Url to page
                            return <Route key={label} exact path={urls[0]} component={component} />;
                        })}
                </Switch>
            </Router>
        </div>
    );
}

MainLayout.propTypes = {
    layouts: PropTypes.array.isRequired
};

export default MainLayout;
