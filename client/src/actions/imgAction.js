import imgService from '../services/apiService.js';

import {
    IMG_SEARCH_SUCCESS,
    IMG_SEARCH_FAILED,
    IMG_CREATE_SUCCESS,
    IMG_CREATE_FAILED,
    IMG_FAV_SUCCESS,
    IMG_GET_BY_ID_SUCCESS,
    IMG_FOLLOW_AUTHOR
} from './config.js';

/**
 * @description
 *  Search image by keyword
 */
export const searchImgsByKey = (keyword) => dispatch => {
    return new Promise((resolve, reject) => {
        imgService.searchImgsByKey(keyword)
            .then((data) => {
                data.keyword = keyword;
                dispatch({ type: IMG_SEARCH_SUCCESS, data });
                resolve()
            })
            .catch((err) => {
                err = err?.response?.data;
                dispatch({ type: IMG_SEARCH_FAILED, err });
                reject()
            })
    })
}

/**
 * @description
 *  Create image items.
 */
export const createImg = (imgData) => dispatch => {
    return new Promise((resolve, reject) => {
        imgService.createImg(imgData)
            .then((images) => {
                dispatch({ type: IMG_CREATE_SUCCESS, images });
                resolve();
            })
            .catch((err) => {
                dispatch({ type: IMG_CREATE_FAILED, err });
                reject();
            });
    });
}

export const addFavourite = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        imgService.addFavourite(data)
            .then(data => {
                dispatch({ type: IMG_FAV_SUCCESS, data });
                resolve();
            })
            .catch(err => {
                reject();
            });
    })
}

export const getImageById = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        imgService.getImageById(data)
            .then(data => {
                dispatch({ type: IMG_GET_BY_ID_SUCCESS, data });
                resolve();
            })
            .catch(err => {
                reject();
            });
    })
}

export const followImgAuthor = (data) => dispatch => {
    return new Promise((resolve, reject) => {
        imgService.followImgAuthor(data)
            .then(data => {
                dispatch({ type: IMG_FOLLOW_AUTHOR, data });
                resolve();
            })
            .catch(err => {
                reject();
            });
    })
}