import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLicense, getRepo } from '../proxies/githubProxies';

import { setLoading, setRepos, setAlreadyLoaded } from '../store/slices/github';
import { githubConfigSelector, githubSelector } from '../store/selectors';

const isDef = (val) => val !== undefined && val !== null;

const defaultDisabledRepo = (id) => ({
    id,
    enabled: false,
    main: false,
    imageUrl: undefined,
});

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
    return [
        field.params.reduce((acc, { fieldName, type, value }) => ({ ...acc, [fieldName]: getValue(baseObj, type, value) }), {
            id: field.fieldName,
        }),
    ];
};

export default () => {
    const dispatch = useDispatch();
    const { repos, isLoading, alreadyLoaded } = useSelector(githubSelector);
    const { repos: reposConfig, tags: tagsConfig, username } = useSelector(githubConfigSelector);

    useEffect(() => {
        const buildTags = async (repo) => {
            let completeLicense;
            try {
                completeLicense = repo.license?.key && (await getLicense(repo.license.key)).data;
            } catch (err) {
                console.error(err);
            }
            const repoWithCompleteLicense = { ...repo, license: completeLicense };
            return tagsConfig.flatMap((field) => buildTag(field, repoWithCompleteLicense));
        };

        const buildRepoParams = async (configRepo, allRepos) => {
            const repo = allRepos.find(({ id: repoId }) => repoId === configRepo.id) || defaultDisabledRepo(configRepo.id);
            const { id, name, description, html_url: url, fork, archived, disabled, contributors_url: contributorsUrl } = repo;

            const tags = await buildTags(repo);
            return {
                code: id,
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

        const loadRepos = async () => {
            dispatch(setLoading(true));

            let userRepos = [];
            let page = 1;
            let data;

            try {
                do {
                    // eslint-disable-next-line no-await-in-loop
                    data = (await getRepo(username, page)).data;
                    if (data) userRepos = [...userRepos, ...data];
                    page += 1;
                } while (data?.length);

                userRepos = userRepos.filter(({ private: privateRepo }) => !privateRepo);
                userRepos = await Promise.all((reposConfig || []).map((configRepo) => buildRepoParams(configRepo, userRepos)));

                dispatch(setLoading(false));
                dispatch(setRepos(userRepos));
                dispatch(setAlreadyLoaded(true));
            } catch (err) {
                console.error(err);
                dispatch(setLoading(false));
                dispatch(setRepos([]));
            }
        };

        if (!alreadyLoaded && !!reposConfig && !!tagsConfig && !!username) loadRepos();
    }, [alreadyLoaded, dispatch, reposConfig, tagsConfig, username]);

    return { repos, isLoading };
};
