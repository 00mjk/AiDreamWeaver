import { combineReducers } from 'redux';
import authReducer from './authReducer'
import imgReducer from './imgReducer'
import aiReducer from './aiReducer'
import mockupReducer from './mockupReducer'
import superResReducer from './superResReducer'
import toCreateReducer from './toCreateReducer';
import pricingReducer from './pricingReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    img: imgReducer,
    aiObj: aiReducer,
    mockupObj: mockupReducer,
    superResObj: superResReducer,
    toCreate: toCreateReducer,
    pricingObj: pricingReducer
})

export default rootReducer;