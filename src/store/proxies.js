import axios from 'axios';

export const getGithubData = ({ url }) => {
    const params = {};
    return axios.get(url, params);
};

export const getGithubResource = ({ githubUsername, repoName, branch, githubConfigFile }) => {
    const url = `https://raw.githubusercontent.com/${githubUsername}/${repoName}/${branch}/${githubConfigFile}`;
    const params = {};
    return axios.get(url, params);
};
