import axios from 'axios';
import { SIGNOUT } from '../actions/config';
import store from '../store';

class ImgService {
    constructor() {
        this.service = axios.create({
            // baseURL: `${process.env.SERVER_URL}/users`
            baseURL: `http://localhost:5001/imgs`,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        this.service.interceptors.response.use(
            (res) => res,
            (err) => {
                if (err.response.status === 401) {
                    store.dispatch({ type: SIGNOUT });
                }
                return Promise.reject(err);
            }
        )
    }

    /**
     * @description
     *  Search images from server by keyword.
     */
    searchImgsByKey = (keyword) => {
        return new Promise((resolve, reject) => {
            this.service.post('/search', {
                keyword: keyword
            })
                .then(res => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * @description
     *  Create image
     */
    createImg = (imgData) => {
        return new Promise((resolve, reject) => {
            this.service.post('/create', imgData)
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err);
                })
        })
    }

    setTokenInHeader = (token) => {
        this.service.defaults.headers.common['x-auth-token'] = token;
    }

    removeTokenInHeader = () => {
        delete this.service.defaults.headers.common['x-auth-token'];
    }
}

const service = new ImgService();

export default service;