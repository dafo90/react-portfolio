import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestGithubRepos } from '../actions/actions';

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestGithubRepos());
    }, [dispatch]);
};
