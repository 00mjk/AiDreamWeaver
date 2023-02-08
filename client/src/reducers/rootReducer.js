import { combineReducers } from 'redux';
import authReducer from './authReducer'
import imgReducer from './imgReducer'
import toCreateReducer from './toCreateReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    img: imgReducer,
    toCreate: toCreateReducer,
})

export default rootReducer;