import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRawJson } from '../proxies/githubProxies';
import { layoutsConfigSelector } from '../store/selectors';
import { setConfig } from '../store/slices/config';

export default () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const layouts = useSelector(layoutsConfigSelector);

    useEffect(() => {
        const fetchConfig = async () => {
            setIsLoading(true);
            const { data } = await getRawJson('dafo90', 'react-portfolio-config', 'master', 'config.json');
            dispatch(setConfig(data));
            setIsLoading(false);
        };

        fetchConfig();
    }, [dispatch]);

    return { isLoading, layouts };
};
