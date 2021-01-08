import { createSlice } from '@reduxjs/toolkit';

const initialState = { mobileDrawerOpen: false, selectedLayout: undefined };

const slice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        openMobileDrawer(state) {
            state.mobileDrawerOpen = true;
        },
        closeMobileDrawer(state) {
            state.mobileDrawerOpen = false;
        },
        setSelectedLayout(state, { payload }) {
            state.selectedLayout = payload;
        },
    },
});

export default slice.reducer;

// Actions
const { openMobileDrawer, closeMobileDrawer, setSelectedLayout } = slice.actions;

const setLayout = ({ id, title, code, urls, enabled, homepage }) => async (dispatch) => {
    dispatch(setSelectedLayout({ id, title, code, urls, enabled, homepage }));
};

export { closeMobileDrawer, openMobileDrawer, setLayout };
