import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';
import DrawerMenu from './DrawerMenu';

const useStyles = makeStyles(() => ({
    mobileDrawer: ({ width, maxWidth }) => ({
        width,
        maxWidth
    })
}));

function MobileDrawer({ width, maxWidth, closeDrawer, open }) {
    const classes = useStyles({ width, maxWidth });
    const theme = useTheme();
    return (
        <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClick={closeDrawer}
            onClose={closeDrawer}
            classes={{
                paper: classes.mobileDrawer
            }}
            ModalProps={{
                keepMounted: true
            }}
        >
            <DrawerMenu closeDrawer={closeDrawer} />
        </Drawer>
    );
}

MobileDrawer.propTypes = {
    width: PropTypes.string,
    maxWidth: PropTypes.string.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

MobileDrawer.defaultProps = {
    width: '90vw'
};

export default MobileDrawer;
