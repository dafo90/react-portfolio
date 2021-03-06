import { Drawer } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { mobileDrawerOpenSelector } from '../../../store/selectors';
import { closeMobileDrawer } from '../../../store/slices/navigation';
import DrawerMenu from './DrawerMenu';

const useStyles = makeStyles(() => ({
    mobileDrawer: ({ width, maxWidth }) => ({
        width,
        maxWidth,
    }),
}));

const MobileDrawer = ({ width, maxWidth }) => {
    const dispatch = useDispatch();
    const classes = useStyles({ width, maxWidth });
    const theme = useTheme();
    const open = useSelector(mobileDrawerOpenSelector);
    return (
        <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClick={() => dispatch(closeMobileDrawer())}
            onClose={() => dispatch(closeMobileDrawer())}
            classes={{
                paper: classes.mobileDrawer,
            }}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <DrawerMenu />
        </Drawer>
    );
};

MobileDrawer.propTypes = {
    width: PropTypes.string,
    maxWidth: PropTypes.string.isRequired,
};

MobileDrawer.defaultProps = {
    width: '90vw',
};

export default MobileDrawer;
