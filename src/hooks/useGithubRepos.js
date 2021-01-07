import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { github } from '../store/selectors';
import { loadRepos } from '../store/slices/github';

export default () => {
    const dispatch = useDispatch();
    const { repos, isLoading } = useSelector(github);

    useEffect(() => {
        dispatch(loadRepos());
    }, [dispatch]);

    return { repos, isLoading };
};
