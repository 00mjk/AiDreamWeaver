import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/config';

const initialState = {
    isAuth: false,
    user: null,
};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isAuth: action.payload.isAuth,
                user: action.payload.user
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {};
        case LOGOUT:
            return {};
        default:
            return state;
    }
}