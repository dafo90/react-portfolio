import moment from 'moment';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import github from '../../configurations/github';
import { receiveGithubRepos, REQUEST_GITHUB_REPOS } from '../actions/githubActions';
import { getGithubData } from '../proxies/githubProxies';

function* buildRepoParams(configRepo, repos) {
    try {
        const {
            id,
            name,
            description,
            html_url: url,
            license,
            fork,
            created_at: createdAt,
            updated_at: updatedAt,
            pushed_at: pushedAt,
            language,
            archived,
            disabled,
            forks_count: forks,
            watchers_count: watchers,
            stargazers_count: stars,
            contributors_url: contributorsUrl
        } = (repos && repos.find(({ id: repoId }) => repoId === configRepo.id)) || {
            id: configRepo.id,
            enabled: false,
            main: false,
            imageUrl: undefined
        };
        const completeLicense = license && license.url && (yield call(getGithubData, { url: license.url })).data;
        const tags = github.buildTags(archived, completeLicense, language, forks, watchers, stars);
        return {
            id,
            name,
            description,
            url,
            imageUrl: '/logos/github.svg',
            transparentImage: !configRepo.imageUrl,
            fork,
            createdAt: moment(createdAt, github.dateFormat).toDate(),
            updatedAt: moment(updatedAt, github.dateFormat).toDate(),
            pushedAt: moment(pushedAt, github.dateFormat).toDate(),
            archived,
            disabled,
            contributorsUrl,
            tags,
            ...configRepo
        };
    } catch (err) {
        return { enabled: false };
    }
}

function* requestGithubRepos() {
    const { username: githubUsername } = github;
    const pageUrl = `https://api.github.com/users/${githubUsername}/repos?page=`;
    let repos = [];
    let page = 1;
    let data;
    do {
        data = (yield call(getGithubData, { url: `${pageUrl}${page}` })).data;
        repos = repos.concat(data);
        page += 1;
    } while (data && data.length);
    repos = repos.filter(({ private: privateRepo }) => !privateRepo);
    repos = yield all(github.repos && github.repos.map(configRepo => buildRepoParams(configRepo, repos)));
    yield put(receiveGithubRepos(repos));
}

export default function* sagasRoot() {
    yield takeLatest(REQUEST_GITHUB_REPOS, requestGithubRepos);
}
