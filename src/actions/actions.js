export const SET_LAYOUT = 'SET_LAYOUT';
export const OPEN_MOBILE_DRAWER = 'OPEN_MOBILE_DRAWER';
export const CLOSE_MOBILE_DRAWER = 'CLOSE_MOBILE_DRAWER';

export const setLayout = layout => ({
    type: SET_LAYOUT,
    layout
});

export const openMobileDrawer = () => ({
    type: OPEN_MOBILE_DRAWER
});

export const closeMobileDrawer = () => ({
    type: CLOSE_MOBILE_DRAWER
});
