import axios from 'axios';
import { SIGNOUT } from '../actions/types';
import store from '../store';

class AuthApi {
    constructor() {
        this.api = axios.create({
            // baseURL: `${process.env.SERVER_URL}/users`
            baseURL: `http://localhost:5001/api`,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.api.interceptors.response.use(
            (res) => res,
            (err) => {
                if (err.response.status === 401) {
                    store.dispatch({ type: SIGNOUT });
                }
                return Promise.reject(err);
            }
        )
    }

    loadUser = () => {
        return new Promise((resolve, reject) => {
            this.api.get('/')
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
        })
    }

    signin = (formData) => {
        return new Promise((resolve, reject) => {
            this.api.post('/signin', formData)
                .then(res => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                })
        })
    }

    signup = (formData) => {
        return new Promise((resolve, reject) => {
            this.api.post('/signup', formData)
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err);
                })
        })
    }

    setTokenInHeader = (token) => {
        this.api.defaults.headers.common['x-auth-token'] = token;
    }

    removeTokenInHeader = () => {
        delete this.api.defaults.headers.common['x-auth-token'];
    }
}

const authApi = new AuthApi();

export default authApi;