import {INPUT_VALUE_CHANGED, LOGIN_USER, LOGIN_WITH_EMAIL_FAILED, LOGIN_WITH_EMAIL_SUCCESS} from "../actions/types";

/**
 * Created by Fatih Taşdemir on
 */

const INITIAL_STATE = {
    email: 'finder.test@mailinator.com',
    password: 'tester',
    login_loading: false,
    login_success: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return {...state, login_loading: true};

        case LOGIN_WITH_EMAIL_SUCCESS:
            return {...state, login_loading: false, email: '', password: '', login_success: true};

        case LOGIN_WITH_EMAIL_FAILED:
            return {...state, login_loading: false};

        case INPUT_VALUE_CHANGED:
            return {...state, [action.payload.which]: action.payload.value};

        default:
            return INITIAL_STATE
    }
};