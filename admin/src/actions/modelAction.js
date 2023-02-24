import modelApi from '../api/modelApi';
import { FETCH_ALL_MODELS, FETCH_MODELS, ADD_MODEL, DELETE_MODEL, UPDATE_MODEL, START_LOADING, END_LOADING } from './types';

/**
 * @description
 *  get models
 */

export const fetchAllModels = () => async (dispatch) => {
    try {
        const data = await modelApi.fetchAllModels();
        dispatch({ type: FETCH_ALL_MODELS, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const fetchModels = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const data = await modelApi.fetchModels(searchQuery);
        dispatch({ type: FETCH_MODELS, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const deleteModel = (id, snapbarRef) => async (dispatch) => {
    try {
        const result = await modelApi.deleteModel(id)
        // dispatch({type: DELETE_MODEL, payload: id})
        snapbarRef.current.showSnackbar({
            show: true,
            type: 'success',
            message: result.msg
        });

        setTimeout(() => dispatch({ type: DELETE_MODEL, payload: id }),
            1000)
    } catch (error) {
        console.log(error)
    }
}

export const updateModel = (updateData, snapbarRef) => async (dispatch) => {
    try {
        const result = await modelApi.updateModel(updateData)
        // dispatch({type: UPDATE_MODEL, payload: result})
        snapbarRef.current.showSnackbar({
            show: true,
            type: 'success',
            message: "New model updated successfully."
        });
        setTimeout(() => dispatch({ type: UPDATE_MODEL, payload: result }),
            1000)
    } catch (error) {
        console.log(error)
    }
}

export const addModel = (modelData, snapbarRef) => async (dispatch) => {
    try {
        const result = await modelApi.addModel(modelData)
        console.log(result)
        // dispatch({ type: ADD_MODEL, payload: result })
        snapbarRef.current.showSnackbar({
            show: true,
            type: 'success',
            message: "New model created successfully."
        });

        setTimeout(() => dispatch({ type: ADD_MODEL, payload: result }),
            1500)
    } catch (error) {
        console.log(error);
    }
}