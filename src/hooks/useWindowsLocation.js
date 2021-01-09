import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { layoutsConfigSelector, selectedLayoutSelector } from '../store/selectors';
import { setLayout } from '../store/slices/navigation';

export default () => {
    const dispatch = useDispatch();
    const selectedLocation = useSelector(selectedLayoutSelector);
    const layouts = useSelector(layoutsConfigSelector);
    const history = useHistory();

    useEffect(() => {
        const findLayoutByPath = (urlToFind) => layouts.find(({ enabled, urls }) => enabled && urls && urls.includes(urlToFind));

        if (findLayoutByPath) dispatch(setLayout(findLayoutByPath(window.location.pathname)));
    }, [dispatch, layouts]);

    useEffect(() => {
        if (selectedLocation && history) history.push(selectedLocation.urls[0]);
    }, [history, selectedLocation]);
};
