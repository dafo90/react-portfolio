export const REQUEST_GITHUB_REPOS = 'REQUEST_GITHUB_REPOS';
export const RECEIVE_GITHUB_REPOS = 'RECEIVE_GITHUB_REPOS';

// GitHub actions

export const requestGithubRepos = () => ({
    type: REQUEST_GITHUB_REPOS
});

export const receiveGithubRepos = repos => ({
    type: RECEIVE_GITHUB_REPOS,
    repos
});
