import axios from 'axios';
import { SIGNOUT } from '../actions/types';
import store from '../store';

class UserApi {
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

    fetchUsers = (searchQuery) => {
        return new Promise((resolve, reject) => {
            this.api.post('/users', searchQuery)
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
        })
    }

    addUser = (userData) => {
        return new Promise((resolve, reject) => {
            this.api.post('/addUser', userData)
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err);
                })
        })
    }

    deleteUser = (id) => {
        return new Promise((resolve, reject) => {
            console.log(id)
            this.api.post('/deleteUser', { userId: id })
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err);
                })
        })
    }

    updateUser = (updateData) => {
        return new Promise((resolve, reject) => {
            console.log(updateData)
            this.api.post('/updateUser', updateData)
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err);
                })
        })
    }
}

const userApi = new UserApi();

export default userApi;