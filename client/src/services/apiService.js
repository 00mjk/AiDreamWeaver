import axios from 'axios';
import { SIGNOUT } from '../actions/config';
import store from '../store';

class ApiService {
    constructor() {
        this.service = axios.create({
            baseURL: process.env.REACT_APP_LOCAL_SERVER_URL,
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
            this.service.post('/imgs/search', {
                keyword: keyword
            }).then(res => {
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
            this.service.post('/imgs/create', imgData).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err);
            })
        })
    }

    /**
     * @description
     *  Add or remove favourite from image.
     */
    addFavourite = (data) => {
        return new Promise((resolve, reject) => {
            this.service.post('/imgs/fav', data).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    /**
     * @description
     *  Add or remove favourite from image.
     */
    getImageById = (data) => {
        return new Promise((resolve, reject) => {
            this.service.post('/imgs/get_image_by_id', data).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    /**
     * @description
     *  Follow or unfollow the image author.
     */
    followImgAuthor = (data) => {
        return new Promise((resolve, reject) => {
            this.service.post('/imgs/follow_img_author', data).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    /**
     * @description
     *  Get roles
     */
    getAllRoles = () => {
        return new Promise((resolve, reject) => {
            this.service.post('/roles/get_all_roles').then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    /**
     * @description
     *  Change user's role
     */
    purchaseRole = (role) => {
        return new Promise((resolve, reject) => {
            this.service.post("/users/purchase_role", role).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        });
    };

    /**
     * @description
     *  Make Image State for public or private.
     */
    makeImgPrivOrPub = (image) => {
        return new Promise((resolve, reject) => {
            this.service.post("/imgs/make_private", image).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            });
        });
    }

    setTokenInHeader = (token) => {
        this.service.defaults.headers.common['x-auth-token'] = token;
    }

    removeTokenInHeader = () => {
        delete this.service.defaults.headers.common['x-auth-token'];
    }
}

const service = new ApiService();

export default service;