import { SET_LAYOUT, OPEN_MOBILE_DRAWER, CLOSE_MOBILE_DRAWER } from '../actions/actions';
import layouts from '../configurations/layouts';

const findLayoutByPath = urlToFind => layouts.find(({ urls }) => urls && urls.find(url => url === urlToFind));

const initialState = {
    layout: findLayoutByPath(window.location.pathname),
    mobileDrawerOpen: false,
    drawerWidth: '280px'
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LAYOUT:
            return {
                ...state,
                layout: findLayoutByPath(action.url)
            };
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
        default:
            return state;
    }
}

export default rootReducer;
