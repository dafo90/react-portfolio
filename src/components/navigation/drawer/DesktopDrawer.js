import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';
import DrawerMenu from './DrawerMenu';

const useStyles = makeStyles(() => ({
    desktopDrawer: ({ width }) => ({
        width
    })
}));

function DesktopDrawer({ width }) {
    const classes = useStyles({ width });
    return (
        <Drawer
            classes={{
                paper: classes.desktopDrawer
            }}
            variant="permanent"
            open
        >
            <DrawerMenu />
        </Drawer>
    );
}

DesktopDrawer.propTypes = {
    width: PropTypes.string.isRequired
};

export default DesktopDrawer;
