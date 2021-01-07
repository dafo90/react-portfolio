/* eslint-disable camelcase */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import github from '../../configurations/github';
import { getLicense, getRepo } from '../../proxies/githubProxies';

const initialState = { repos: [], isLoading: true };

const slice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        setRepos(state, { payload }) {
            state.repos = payload;
        },
        setLoading(state, { payload }) {
            state.isLoading = payload;
        },
    },
});

export default slice.reducer;

// Actions
const { setRepos, setLoading } = slice.actions;

const defaultDisabledRepo = (id) => ({
    id,
    enabled: false,
    main: false,
    imageUrl: undefined,
});

const isDef = (val) => val !== undefined && val !== null;

const getValue = (baseObj, type, value) => {
    switch (type) {
        case 'text':
            return value;
        case 'this':
            return isDef(baseObj) ? baseObj : 'Unknown';
        case 'field':
            return baseObj?.[value];
        case 'icon':
            return value;
        default:
            return undefined;
    }
};

const buildTag = (field, repo) => {
    const baseObj = repo[field.fieldName];
    if (!isDef(baseObj)) return [];
    if (isDef(field.onlyIf) && baseObj !== field.onlyIf) return [];
    return [field.params.reduce((acc, { fieldName, type, value }) => ({ ...acc, [fieldName]: getValue(baseObj, type, value) }), { id: uuid() })];
};

const buildTags = async (repo) => {
    let completeLicense;
    try {
        completeLicense = repo.license?.key && (await getLicense(repo.license.key)).data;
    } catch (err) {
        console.error(err);
    }
    const repoWithCompleteLicense = { ...repo, license: completeLicense };
    return github.tags.flatMap((field) => buildTag(field, repoWithCompleteLicense));
};

const buildRepoParams = async (configRepo, repos) => {
    const repo = repos.find(({ id: repoId }) => repoId === configRepo.id) || defaultDisabledRepo(configRepo.id);
    const { id, name, description, html_url: url, fork, archived, disabled, contributors_url: contributorsUrl } = repo;

    const tags = await buildTags(repo);
    return {
        id,
        name,
        description,
        url,
        imageUrl: '/logos/github.svg',
        transparentImage: !configRepo.imageUrl,
        fork,
        archived,
        disabled,
        contributorsUrl,
        tags,
        ...configRepo,
    };
};

export const loadRepos = () => async (dispatch) => {
    dispatch(setLoading({ loading: true }));

    let userRepos = [];
    let page = 1;
    let data;

    try {
        do {
            // eslint-disable-next-line no-await-in-loop
            data = (await getRepo(github.username, page)).data;
            if (data) userRepos = [...userRepos, ...data];
            page += 1;
        } while (data?.length);

        userRepos = userRepos.filter(({ private: privateRepo }) => !privateRepo);
        userRepos = await Promise.all((github.repos || []).map((configRepo) => buildRepoParams(configRepo, userRepos)));

        dispatch(setLoading(false));
        dispatch(setRepos(userRepos));
    } catch (err) {
        console.error(err);
        dispatch(setLoading(false));
        dispatch(setRepos([]));
    }
};
