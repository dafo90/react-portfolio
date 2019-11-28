import {
    SET_LAYOUT,
    OPEN_MOBILE_DRAWER,
    CLOSE_MOBILE_DRAWER,
    GITHUB_RECEIVE_REPOS,
    SET_SELECTED_INDEX_MENU,
    OPEN_SNACKBAR,
    CLOSE_SNACKBAR
} from '../actions/actions';
import layouts from '../configurations/layouts';

const findLayoutByPath = urlToFind => layouts.find(({ enabled, urls }) => enabled && urls && urls.includes(urlToFind));
const findLayoutIndex = urlToFind => {
    const { index } = layouts
        .filter(({ enabled, urls }) => enabled && urls && urls.length)
        .map(({ urls }, i) => ({ urls, index: i }))
        .find(({ urls }) => urls.includes(urlToFind));
    return index;
};

const initialState = {
    layout: findLayoutByPath(window.location.pathname),
    mobileDrawerOpen: false,
    githubRepos: [],
    selectedIndexMenu: findLayoutIndex(window.location.pathname),
    openSnackbar: false,
    snackbarVariant: 'success',
    snackbarMessage: undefined
};

const rootReducer = (state = initialState, action) => {
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
        case SET_SELECTED_INDEX_MENU:
            return {
                ...state,
                selectedIndexMenu: action.selectedIndexMenu
            };
        case OPEN_SNACKBAR:
            return {
                ...state,
                openSnackbar: true,
                snackbarVariant: action.snackbarVariant,
                snackbarMessage: action.snackbarMessage
            };
        case CLOSE_SNACKBAR:
            return {
                ...state,
                openSnackbar: false
            };
        default:
            return state;
    }
};

export default rootReducer;
