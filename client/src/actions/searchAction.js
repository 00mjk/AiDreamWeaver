import imgService from '../services/imgService.js';

import { SEARCH_IMG_SUCCESS, SEARCH_IMG_FAILED } from './config.js';

/**
 * @description
 *  Search image by keyword
 */
export const searchImgsByKey = (keyword) => dispatch => {
    var data = [];
    data['keyword'] = keyword
    dispatch({ type: SEARCH_IMG_SUCCESS, data });
    // return new Promise((resolve, reject) => {
    //     imgService.searchImgsByKey(keyword)
    //         .then((data) => {
    //             dispatch({ type: SEARCH_IMG_SUCCESS, data });
    //             resolve()
    //         })
    //         .catch((err) => {
    //             err = err?.response?.data;
    //             dispatch({ type: SEARCH_IMG_FAILED, err });
    //             reject()
    //         })
    // })
}