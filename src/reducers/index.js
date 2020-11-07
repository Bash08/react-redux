import counterReducer from './counter';
import isLoggedReducer from './isloggad';
import dataReducer from './fetch';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer,
    data : dataReducer
})

export default allReducers 