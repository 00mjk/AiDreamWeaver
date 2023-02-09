import {
    AI_MAKE_IMG_START,
    AI_MAKE_IMG_SUCCESS,
    AI_MAKE_IMG_FAILED
} from "../actions/config";

const initialState = {
    loading: false,
    settings: null,
    results: null,
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
                results: action?.data?.res
            }
        default:
            return state;
    }
}