import { put, call, all, takeEvery, takeLatest } from 'redux-saga/effects';
import moment from 'moment';
import history from '../utils/history';
import github from '../configurations/github';
import { SET_LAYOUT, GITHUB_REQUEST_REPOS, closeMobileDrawer, receiveGithubRepos } from '../actions/actions';
import { getGithubData } from './proxies';

function* setLayout(action) {
    const { url } = action;
    history.push(url);
    yield put(closeMobileDrawer());
}

function* buildRepoParams({
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
}) {
    try {
        const { enabled, main, imageUrl } = (github.repos && github.repos.find(({ id: configId }) => id === configId)) || {
            enabled: false,
            main: false,
            imageUrl: undefined
        };
        const completeLicense = (yield call(getGithubData, { url: license.url })).data;
        const tags = github.buildTags(archived, completeLicense, language, forks, watchers, stars);
        return {
            id,
            enabled,
            main,
            name,
            description,
            url,
            imageUrl: imageUrl || '/logos/github.svg',
            transparentImage: !imageUrl,
            fork,
            createdAt: moment(createdAt, github.dateFormat).toDate(),
            updatedAt: moment(updatedAt, github.dateFormat).toDate(),
            pushedAt: moment(pushedAt, github.dateFormat).toDate(),
            archived,
            disabled,
            contributorsUrl,
            tags
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
    repos = yield all(repos.filter(({ private: privateRepo }) => !privateRepo).map(repo => buildRepoParams(repo)));
    yield put(receiveGithubRepos(repos));
}

export default function* sagasRoot() {
    yield takeEvery(SET_LAYOUT, setLayout);
    yield takeLatest(GITHUB_REQUEST_REPOS, requestGithubRepos);
}
