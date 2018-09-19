import {combineReducers} from 'redux';
import AuthReducer from "./AuthReducer";

/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

export default combineReducers({
    auth: AuthReducer
})
