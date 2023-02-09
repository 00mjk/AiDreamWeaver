import {
    MOCKUP_INITIMG_SELECTED
} from "../actions/config";

const initialState = {
    initImgUrl: ""       // Init image for mockup
};

export default function imgReducer(state = initialState, action) {
    switch (action.type) {
        case MOCKUP_INITIMG_SELECTED:
            return {
                ...state,
                initImgUrl: action?.url
            }
        default:
            return state;
    }
}