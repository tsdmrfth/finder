import {CREATE_USER, CREATE_USER_FAILED, CREATE_USER_SUCCESS, INPUT_VALUE_CHANGED} from "../actions/types";

/**
 * Created by Fatih Taşdemir on
 */

const INITIAL_STATE = {
    name: '',
    surname: '',
    email: '',
    password: '',
    create_loading: false,
    error: '',
    user_created: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case INPUT_VALUE_CHANGED:
            return {...state, [action.payload.which]: action.payload.value, error: ''};

        case CREATE_USER:
            return {...state, create_loading: true};

        case CREATE_USER_FAILED:
            return {...state, error: action.payload, create_loading: false};

        case CREATE_USER_SUCCESS:
            state = INITIAL_STATE;
            return {...state, user_created: true};

        default:
            return INITIAL_STATE

    }
};