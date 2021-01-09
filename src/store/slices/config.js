import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const slice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfig(state, { payload }) {
            Object.keys(payload).forEach((key) => {
                state[key] = payload[key];
            });
        },
    },
});

export default slice.reducer;

// Actions
export const { setConfig } = slice.actions;
