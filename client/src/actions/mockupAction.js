import {
    MOCKUP_INITIMG_SELECTED
} from './config.js';

export const setMockupChosenImgUrl = (url) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: MOCKUP_INITIMG_SELECTED, url });
        resolve();
    });
}