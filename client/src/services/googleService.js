import axios from 'axios';

class GoogleService {
    constructor() {
        this.service = axios.create({
            // baseURL: `${process.env.SERVER_URL}/users`
            baseURL: `https://www.googleapis.com/oauth2/v3`,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // this.service.interceptors.response.use(
        //     (res) => res,
        //     (err) => {
        //         if (err.response.status === 401) {
        //             store.dispatch({ type: SIGNOUT });
        //         }
        //         return Promise.reject(err);
        //     }
        // )
    }

    getUserInfo = (accessToken) => {
        return new Promise((resolve, reject) => {
            this.service.get('/userinfo?access_token=' + accessToken).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        });
    }
}

const service = new GoogleService();

export default service;