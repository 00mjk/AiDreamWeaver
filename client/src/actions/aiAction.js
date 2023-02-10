import AiService from '../services/aiService';

import {
    AI_MAKE_IMG_FAILED,
    AI_MAKE_IMG_START,
    AI_MAKE_IMG_SUCCESS,
    AI_MAKE_IMG_ERROR
} from './config.js';

export const makeAiImage = (settings) => dispatch => {
    return new Promise((resolve, reject) => {
        const aiService = new AiService();
        dispatch({
            type: AI_MAKE_IMG_START,
            data: {
                settings: settings
            }
        });

        aiService.makeImg(settings).then((res) => {
            if (res.status === 'success') {
                dispatch({
                    type: AI_MAKE_IMG_SUCCESS,
                    data: {
                        res: res,
                        settings: settings
                    }
                });
                resolve(res);
                return;
            }

            dispatch({
                type: AI_MAKE_IMG_FAILED,
                data: { res: res }
            })
            reject(res);
        }).catch(err => {
            dispatch({
                type: AI_MAKE_IMG_ERROR
            });
            reject(err);
        });
    });
}