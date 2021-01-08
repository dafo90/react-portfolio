import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { github } from '../store/selectors';
import { loadRepos } from '../store/slices/github';

export default () => {
    const dispatch = useDispatch();
    const { repos, isLoading, alreadyLoaded } = useSelector(github);

    useEffect(() => {
        if (!alreadyLoaded) dispatch(loadRepos());
    }, [alreadyLoaded, dispatch]);

    return { repos, isLoading };
};
