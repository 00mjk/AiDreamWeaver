import { combineReducers } from 'redux';

import authReducer from './authReducer';
import usersReducer from './usersReducer';
import roleReducer from './roleReducer';
import filtersReducer from './filtersReducer';
import salesReducer from './salesReducer';
import modelsReducer from './modelsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    roles: roleReducer,
    filters: filtersReducer,
    sales: salesReducer,
    models: modelsReducer
})

export default rootReducer;