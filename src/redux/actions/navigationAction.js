export const OPEN_MOBILE_DRAWER = 'OPEN_MOBILE_DRAWER';
export const CLOSE_MOBILE_DRAWER = 'CLOSE_MOBILE_DRAWER';
export const SET_SELECTED_LAYOUT = 'SET_SELECTED_LAYOUT';

export const openMobileDrawer = () => ({
    type: OPEN_MOBILE_DRAWER
});

export const closeMobileDrawer = () => ({
    type: CLOSE_MOBILE_DRAWER
});

export const setSelectedLayout = selectedLayout => ({ type: SET_SELECTED_LAYOUT, selectedLayout });
