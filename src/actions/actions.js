export const SET_LAYOUT = 'SET_LAYOUT';
export const OPEN_MOBILE_DRAWER = 'OPEN_MOBILE_DRAWER';
export const CLOSE_MOBILE_DRAWER = 'CLOSE_MOBILE_DRAWER';
export const GITHUB_REQUEST_REPOS = 'GITHUB_REQUEST_REPOS';
export const GITHUB_RECEIVE_REPOS = 'GITHUB_RECEIVE_REPOS';
export const SET_SELECTED_INDEX_MENU = 'SET_SELECTED_INDEX_MENU';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const setLayout = url => ({
    type: SET_LAYOUT,
    url
});

export const openMobileDrawer = () => ({
    type: OPEN_MOBILE_DRAWER
});

export const closeMobileDrawer = () => ({
    type: CLOSE_MOBILE_DRAWER
});

export const setSelectedIndexMenu = selectedIndexMenu => ({
    type: SET_SELECTED_INDEX_MENU,
    selectedIndexMenu
});

// GitHub actions

export const requestGithubRepos = () => ({
    type: GITHUB_REQUEST_REPOS
});

export const receiveGithubRepos = repos => ({
    type: GITHUB_RECEIVE_REPOS,
    repos
});

// Snackbar actions

export const openSnackbar = (variant, message) => ({
    type: OPEN_SNACKBAR,
    snackbarVariant: variant,
    snackbarMessage: message
});

export const closeSnackbar = () => ({
    type: CLOSE_SNACKBAR
});
