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
        setLayout(state, { payload }) {
            state.selectedLayout = payload;
        },
    },
});

export default slice.reducer;

// Actions
export const { closeMobileDrawer, openMobileDrawer, setLayout } = slice.actions;
