import layouts from '../../configurations/layouts';
import { CLOSE_MOBILE_DRAWER, OPEN_MOBILE_DRAWER, SET_SELECTED_LAYOUT } from '../actions/navigationAction';

const findLayoutByPath = urlToFind => layouts.find(({ enabled, urls }) => enabled && urls && urls.includes(urlToFind));

const initialState = {
    mobileDrawerOpen: false,
    selectedLayout: findLayoutByPath(window.location.pathname)
};

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MOBILE_DRAWER:
            return {
                ...state,
                mobileDrawerOpen: true
            };
        case CLOSE_MOBILE_DRAWER:
            return {
                ...state,
                mobileDrawerOpen: false
            };
        case SET_SELECTED_LAYOUT:
            return {
                ...state,
                selectedLayout: action.selectedLayout
            };
        default:
            return state;
    }
};

export default navigationReducer;
