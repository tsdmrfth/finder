import {FETCH_JOBS} from "../actions/types";

/**
 * Created by Fatih Taşdemir on
 */

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FETCH_JOBS:
            return {...state, data: action.payload};

        default:
            return INITIAL_STATE

    }
};