import { RECEIVE_GITHUB_REPOS } from '../actions/githubActions';

const initialState = {
    repos: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_GITHUB_REPOS:
            return {
                ...state,
                repos: action.repos
            };
        default:
            return state;
    }
};

export default rootReducer;
