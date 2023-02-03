import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT
} from './config';
import AuthService from '../services/authService';

// axios. then()
export const login = (uid, pwd) => dispatch => {

    const authService = new AuthService();

    authService.signin(uid, pwd).then({
        
    });

    dispatch({
        type: LOGIN_REQUEST,
        payload: {
            isAuth: true,
            user: {
                name: "John"
            }
        }
    })
    // return;
    // const service = new AuthService();

    // return dispatch => {
    //     dispatch({
    //         type: LOGIN_REQUEST,
    //         user: {
    //             uid: uid
    //         }
    //     })

    //     service.signin(uid, pwd).then(
    //         user => {
    //             dispatch({
    //                 type: LOGIN_SUCCESS,
    //                 user
    //             })
    //         },
    //         err => {
    //             dispatch({
    //                 type: LOGIN_FAILURE,
    //                 user
    //             })
    //         }
    //     );
    // };
}

export function logout() {
    // const service = new AuthService();
    // service.logout().then(
    //     dispatch({
    //         type: LOGOUT
    //     })
    // );
}