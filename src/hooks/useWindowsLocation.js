import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import layouts from '../configurations/layouts';
import { selectedLayout } from '../store/selectors';
import { setLayout } from '../store/slices/navigation';

const findLayoutByPath = (urlToFind) => layouts.find(({ enabled, urls }) => enabled && urls && urls.includes(urlToFind));

export default () => {
    const dispatch = useDispatch();
    const selectedLocation = useSelector(selectedLayout);
    const history = useHistory();

    useEffect(() => {
        dispatch(setLayout(findLayoutByPath(window.location.pathname)));
    }, [dispatch]);

    useEffect(() => {
        if (selectedLocation && history) history.push(selectedLocation.urls[0]);
    }, [history, selectedLocation]);
};
