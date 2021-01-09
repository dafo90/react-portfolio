/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { repos: [], isLoading: true, alreadyLoaded: false };

const slice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        setRepos(state, { payload }) {
            state.repos = payload;
        },
        setLoading(state, { payload }) {
            state.isLoading = payload;
        },
        setAlreadyLoaded(state, { payload }) {
            state.alreadyLoaded = payload;
        },
    },
});

export default slice.reducer;

// Actions
export const { setRepos, setLoading, setAlreadyLoaded } = slice.actions;
