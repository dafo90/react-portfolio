import { put, call, all, takeEvery, takeLatest } from 'redux-saga/effects';
import moment from 'moment';
import uuid from 'uuid/v4';
import { Gavel, Code, CallSplit, Visibility, Star } from '@material-ui/icons';
import history from '../utils/history';
import github from '../configurations/github';
import { SET_LAYOUT, GITHUB_REQUEST_REPOS, closeMobileDrawer, receiveGithubRepos } from '../actions/actions';
import { getGithubData, getGithubResource } from './proxies';

function* setLayout(action) {
    const { url } = action;
    history.push(url);
    yield put(closeMobileDrawer());
}

function* buildTags({ license, language, forks, watchers, stars }) {
    const tags = [];

    if (license) {
        const completeLicense = (yield call(getGithubData, { url: license.url })).data;
        tags.push({
            id: uuid(),
            text: license.spdx_id,
            icon: Gavel,
            color: 'default',
            variant: 'default',
            url: completeLicense.html_url
        });
    }

    tags.push({
        id: uuid(),
        text: language || 'Unknown',
        icon: Code,
        color: 'default',
        variant: 'default'
    });

    tags.push({
        id: uuid(),
        text: `${watchers} watchers`,
        icon: Visibility,
        color: 'default',
        variant: 'outlined'
    });

    tags.push({
        id: uuid(),
        text: `${stars} stars`,
        icon: Star,
        color: 'default',
        variant: 'outlined'
    });

    tags.push({
        id: uuid(),
        text: `${forks} forks`,
        icon: CallSplit,
        color: 'default',
        variant: 'outlined'
    });

    return tags;
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
    contributors_url: contributorsUrl,
    default_branch: defaultBranch
}) {
    try {
        const { username: githubUsername, configFile: githubConfigFile } = github;
        const branch = githubConfigFile.branch || defaultBranch;
        const { imageFile, ...others } = (yield call(getGithubResource, {
            githubUsername,
            repoName: name,
            branch,
            githubConfigFile: githubConfigFile.name
        })).data;
        const tags = yield call(buildTags, { license, language, forks, watchers, stars });
        return {
            id,
            name,
            description,
            url,
            imageUrl: imageFile ? `https://raw.githubusercontent.com/${githubUsername}/${name}/${branch}/${imageFile}` : undefined,
            fork,
            createdAt: moment(createdAt, github.dateFormat).toDate(),
            updatedAt: moment(updatedAt, github.dateFormat).toDate(),
            pushedAt: moment(pushedAt, github.dateFormat).toDate(),
            archived,
            disabled,
            contributorsUrl,
            tags,
            ...others
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
