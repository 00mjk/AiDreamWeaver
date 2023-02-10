import {
    AI_MAKE_IMG_START,
    AI_MAKE_IMG_SUCCESS,
    AI_MAKE_IMG_FAILED,
    AI_MAKE_IMG_ERROR
} from "../actions/config";

const initialState = {
    loading: false,
    settings: null,
    results: null,
    error: "",
};

export default function aiReducer(state = initialState, action) {
    switch (action.type) {
        case AI_MAKE_IMG_START:
            console.log("AI_MAKE_IMG_START");
            return {
                ...state,
                loading: true,
                settings: action?.data?.settings,
                results: null
            }
        case AI_MAKE_IMG_SUCCESS:
            console.log("AI_MAKE_IMG_SUCCESS");
            return {
                ...state,
                loading: false,
                results: action?.data?.res
            }
        case AI_MAKE_IMG_FAILED:
            console.log("AI_MAKE_IMG_FAILED");
            return {
                ...state,
                loading: false,
                results: action?.data?.res,
                error: action?.err
            }
        case AI_MAKE_IMG_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}