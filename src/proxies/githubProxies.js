import axios from 'axios';

export const getRepo = (username, page = 1, params = {}) => axios.get(`https://api.github.com/users/${username}/repos?page=${page}`, params);

export const getLicense = (key, params = {}) => axios.get(`https://api.github.com/licenses/${key}`, params);

export const getRawJson = (username, repoName, branch, filePath, params = {}) =>
    axios.get(`https://raw.githubusercontent.com/${username}/${repoName}/${branch}/${filePath}`, params);

export const getGithubResource = ({ githubUsername, repoName, branch, githubConfigFile }) => {
    const url = `https://raw.githubusercontent.com/${githubUsername}/${repoName}/${branch}/${githubConfigFile}`;
    const params = {};
    return axios.get(url, params);
};
