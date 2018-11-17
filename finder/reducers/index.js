import {combineReducers} from 'redux';
import AuthReducer from "./AuthReducer";
import JobReducer from "./JobReducer";
import LoginReducer from "./LoginReducer";
import SignUpReducer from "./SignUpReducer";

/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

export default combineReducers({
    auth: AuthReducer,
    jobs: JobReducer,
    login: LoginReducer,
    signUp: SignUpReducer
})
