import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestGithubRepos } from '../redux/actions/githubActions';

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestGithubRepos());
    }, [dispatch]);
};
