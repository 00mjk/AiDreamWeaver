import axios from 'axios';
import { SIGNOUT } from '../actions/types';
import store from '../store';

class ModelApi {
    constructor() {
        this.api = axios.create({
            // baseURL: `${process.env.SERVER_URL}/models`
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

    fetchAllModels = () => {
        return new Promise((resolve, reject) => {
            this.api.get('/allModels')
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
        })
    }

    fetchModels = (searchQuery) => {
        return new Promise((resolve, reject) => {
            this.api.post('/models', searchQuery)
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
        })
    }
    
    addModel = (modelData) => {
        return new Promise((resolve, reject) => {
            this.api.post('/addModel', modelData)
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err);
                })
        })
    }

    deleteModel = (id) => {
        return new Promise((resolve, reject) => {
            console.log(id)
            this.api.post('/deleteModel', {modelId: id})
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err);
                })
        })
    }

    updateModel = (updateData) => {
        return new Promise((resolve, reject) => {
            this.api.post('/updateModel', updateData)
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err);
                })
        })
    }
}

const modelApi = new ModelApi();

export default modelApi;