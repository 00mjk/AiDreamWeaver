import { SEARCH_IMG_SUCCESS, SEARCH_IMG_FAILED } from "../actions/config";

const initialState = {
    isSearch: false,
    loading: false,
    imgSchKeyword: "",
    items: null,
    error: null
};

export default function imgReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_IMG_SUCCESS:
            return {
                ...state,
                isSearch: true,
                loading: false,
                error: null,
                items: null,
                imgSchKeyword: action?.data?.keyword
            }
        case SEARCH_IMG_FAILED:
        default:
            return state;
    }
}