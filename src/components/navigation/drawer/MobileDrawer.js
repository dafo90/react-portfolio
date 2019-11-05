import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';
import DrawerMenu from './DrawerMenu';
import { closeMobileDrawer } from '../../../actions/actions';

const useStyles = makeStyles(() => ({
    mobileDrawer: ({ width, maxWidth }) => ({
        width,
        maxWidth
    })
}));

const MobileDrawer = ({ width, maxWidth }) => {
    const dispatch = useDispatch();
    const classes = useStyles({ width, maxWidth });
    const theme = useTheme();
    const open = useSelector(state => state.mobileDrawerOpen);
    return (
        <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClick={() => dispatch(closeMobileDrawer())}
            onClose={() => dispatch(closeMobileDrawer())}
            classes={{
                paper: classes.mobileDrawer
            }}
            ModalProps={{
                keepMounted: true
            }}
        >
            <DrawerMenu />
        </Drawer>
    );
};

MobileDrawer.propTypes = {
    width: PropTypes.string,
    maxWidth: PropTypes.string.isRequired
};

MobileDrawer.defaultProps = {
    width: '90vw'
};

export default MobileDrawer;
