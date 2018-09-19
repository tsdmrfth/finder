/**
 * Created by Fatih Taşdemir on 19.09.2018
 */
import {TOKEN_CHECKED} from "../actions/types";

const INITIAL_STATE = {loading: true, hasToken: false};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case TOKEN_CHECKED:
            return {...state, hasToken: action.payload, loading: false};

        default:
            return INITIAL_STATE;

    }
};