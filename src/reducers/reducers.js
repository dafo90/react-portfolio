import { SET_LAYOUT, OPEN_MOBILE_DRAWER, CLOSE_MOBILE_DRAWER, GITHUB_RECEIVE_REPOS } from '../actions/actions';
import layouts from '../configurations/layouts';

const findLayoutByPath = urlToFind => layouts.find(({ urls }) => urls && urls.find(url => url === urlToFind));

const initialState = {
    layout: findLayoutByPath(window.location.pathname),
    mobileDrawerOpen: false,
    githubRepos: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LAYOUT:
            return {
                ...state,
                layout: findLayoutByPath(action.url)
            };
        case OPEN_MOBILE_DRAWER:
            return {
                ...state,
                mobileDrawerOpen: true
            };
        case CLOSE_MOBILE_DRAWER:
            return {
                ...state,
                mobileDrawerOpen: false
            };
        case GITHUB_RECEIVE_REPOS:
            return {
                ...state,
                githubRepos: action.repos
            };
        default:
            return state;
    }
}

export default rootReducer;
