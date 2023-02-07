import { SEARCH_IMG_SUCCESS, SEARCH_IMG_FAILED, CREATE_IMG_SUCCESS, CREATE_IMG_FAILED } from "../actions/config";

const initialState = {
    loading: false,
    imgSchKeyword: "",
    images: [],
    recentImages: [],
    error: null
};

export default function imgReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_IMG_SUCCESS:
            console.log(action?.data?.images)
            return {
                ...state,
                loading: false,
                error: null,
                images: action?.data?.images,
                imgSchKeyword: action?.data?.keyword
            }
        case SEARCH_IMG_FAILED:
            return {
                ...state,
                loading: false,
                error: action?.data?.error
            };
        case CREATE_IMG_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                recentImages: action?.data?.images
            }
        case CREATE_IMG_FAILED:
            return {
                ...state
            }
        default:
            return state;
    }
}