import { FETCH_ALL_MODELS, FETCH_MODELS, ADD_MODEL, DELETE_MODEL, UPDATE_MODEL, START_LOADING, END_LOADING } from '../actions/types';

const initialState = {
    loading: true,
    refresh: false,
    models: []
};

export default function modelsReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, loading: true };

        case END_LOADING:
            return { ...state, loading: false };

        case FETCH_ALL_MODELS:
            return {
                ...state,
                models: action.payload.data
            };

        case FETCH_MODELS:
            return {
                ...state,
                models: action.payload.data,
                currentPage: action.payload.currentPage,
                totalCount: action.payload.totalCount
            };
        case ADD_MODEL:
            return {
                ...state,
                refresh: !state.refresh,
                models: [...state.models, action.payload.newModel],
            }
        case DELETE_MODEL:
            return {
                ...state,
                refresh: !state.refresh,
                models: state.models.filter((model) => model._id !== action.payload)
            };
        case UPDATE_MODEL:
            return {
                ...state,
                refresh: !state.refresh,
                models: state.models.map((model) => (model._id === action.payload._id ? action.payload : model))
            };
        default:
            return state;
    }
}