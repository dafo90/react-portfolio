import { put, call, all, takeEvery, takeLatest } from 'redux-saga/effects';
import moment from 'moment';
import history from '../../utils/history';
import github from '../../configurations/github';
import { SET_LAYOUT, GITHUB_REQUEST_REPOS, closeMobileDrawer, receiveGithubRepos, setSelectedIndexMenu } from '../actions/actions';
import { getGithubData } from '../proxies/proxies';
import layouts from '../../configurations/layouts';

function* setLayout(action) {
    const { url } = action;
    const { index: selectedIndexMenu } = layouts
        .filter(({ enabled, urls }) => enabled && urls && urls.length)
        .map(({ urls }, i) => ({ urls, index: i }))
        .find(({ urls }) => urls.includes(url));
    yield put(setSelectedIndexMenu(selectedIndexMenu));
    history.push(url);
    yield put(closeMobileDrawer());
}

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
    yield takeEvery(SET_LAYOUT, setLayout);
    yield takeLatest(GITHUB_REQUEST_REPOS, requestGithubRepos);
}
