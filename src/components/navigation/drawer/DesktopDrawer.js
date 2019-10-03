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

function DesktopDrawer({ width, selectMenu, closeDrawer }) {
    const classes = useStyles({ width });
    return (
        <Drawer
            classes={{
                paper: classes.desktopDrawer
            }}
            variant="permanent"
            open
        >
            <DrawerMenu selectMenu={selectMenu} closeDrawer={closeDrawer} />
        </Drawer>
    );
}

DesktopDrawer.propTypes = {
    width: PropTypes.string.isRequired,
    selectMenu: PropTypes.func,
    closeDrawer: PropTypes.func.isRequired
};

DesktopDrawer.defaultProps = {
    selectMenu: () => {}
};

export default DesktopDrawer;
