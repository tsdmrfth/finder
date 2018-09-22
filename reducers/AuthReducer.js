/**
 * Created by Fatih Taşdemir on 19.09.2018
 */
import {
    CHECK_TOKEN_START,
    FACEBOOK_LOGIN_FAILED,
    FACEBOOK_LOGIN_SUCCESS,
    LOGIN_GOOGLE_FAILED,
    LOGIN_GOOGLE_SUCCESS,
    TOKEN_CHECKED
} from "../actions/types";

const INITIAL_STATE = {
    loading: false,
    hasToken: false,
    email: 'test1@test.com',
    password: 'tester',
    login_loading: false,
    login_success: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CHECK_TOKEN_START:
            return {...state, loading: true};

        case TOKEN_CHECKED:
            return {...state, hasToken: action.payload, loading: false};

        case FACEBOOK_LOGIN_FAILED:
            return {...state, hasToken: false, loading: false};

        case FACEBOOK_LOGIN_SUCCESS:
            return {...state, hasToken: true, loading: false};

        case LOGIN_GOOGLE_SUCCESS:
            return {...state, hasToken: true, loading: false};

        case LOGIN_GOOGLE_FAILED:
            return {...state, hasToken: false, loading: false};

        default:
            return {...state};

    }
};