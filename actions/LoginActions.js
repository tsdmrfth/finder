import {INPUT_VALUE_CHANGED, LOGIN_USER, LOGIN_WITH_EMAIL_FAILED, LOGIN_WITH_EMAIL_SUCCESS} from "./types";
import firebase from "firebase";
import {saveAuthenticatedToLocalStorage} from "../utils/saveAuthenticatedToLocalStorage";

/**
 * Created by Fatih Taşdemir on 22.09.2018
 */

export const inputValueChanged = ({which, value}) => {
    return {
        type: INPUT_VALUE_CHANGED,
        payload: {which, value}
    }
};

export const loginWithEmailAndPassword = ({email, password}) => async dispatch => {
    dispatch({
        type: LOGIN_USER
    });
    try {
        let response = await firebase.auth().signInWithEmailAndPassword('test1@test.com', password);
        const {fullName, photoUrl, email} = response.user;
        await saveAuthenticatedToLocalStorage();
        setTimeout(() => {
            dispatch({
                type: LOGIN_WITH_EMAIL_SUCCESS
            });
        }, 1400)
        //await saveUserToLocalDatabase(fullName, photoUrl, email);
    } catch (e) {
        console.log(e);
        setTimeout(() => {
            dispatch({
                type: LOGIN_WITH_EMAIL_FAILED
            })
        }, 1000)
    }
};