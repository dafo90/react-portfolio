export const SET_LAYOUT = 'SET_LAYOUT';
export const OPEN_MOBILE_DRAWER = 'OPEN_MOBILE_DRAWER';
export const CLOSE_MOBILE_DRAWER = 'CLOSE_MOBILE_DRAWER';
export const GITHUB_REQUEST_REPOS = 'GITHUB_REQUEST_REPOS';
export const GITHUB_RECEIVE_REPOS = 'GITHUB_RECEIVE_REPOS';

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

// GitHub actions

export const requestGithubRepos = () => ({
    type: GITHUB_REQUEST_REPOS
});

export const receiveGithubRepos = repos => ({
    type: GITHUB_RECEIVE_REPOS,
    repos
});
