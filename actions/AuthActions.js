import {AsyncStorage} from 'react-native';
import {Facebook, Google} from 'expo';
import firebase from 'firebase';
import {
    CHECK_TOKEN_START,
    FACEBOOK_LOGIN_FAILED,
    FACEBOOK_LOGIN_SUCCESS,
    LOGIN_GOOGLE_FAILED,
    LOGIN_GOOGLE_SUCCESS,
    TOKEN_CHECKED
} from "./types";
import strings from "../contants/strings";

/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

export const checkAuthToken = () => async dispatch => {
    dispatch({
       type: CHECK_TOKEN_START
    });
    let facebookToken = await AsyncStorage.getItem('auth_token');
    setTimeout(()=> dispatch({
        type: TOKEN_CHECKED,
        payload: facebookToken !== undefined && facebookToken !== '' && facebookToken !== null
    }), 100);
};

export const loginWithFacebook = () => async dispatch => {
    try {
        let {type, token} = await Facebook.logInWithReadPermissionsAsync('300855640741130', {
            permissions: ['public_profile']
        });

        if (type === 'cancel') {
            return dispatch({
                type: FACEBOOK_LOGIN_FAILED
            })
        }

        await saveTokenToStorage(token);
        dispatch({
            type: FACEBOOK_LOGIN_SUCCESS,
        })


    } catch (e) {
        dispatch({
            type: FACEBOOK_LOGIN_SUCCESS,
        })
    }
};

export const loginWithGoogle = () => async dispatch => {
    try {
        const result = await Google.logInAsync({
            iosClientId: strings.iosClientId,
            scopes: ['profile', 'email'],
        });

        if (result.type === 'cancel') {
            dispatch({
                type: LOGIN_GOOGLE_FAILED
            })
        } else {
            await saveTokenToStorage(result.accessToken);
            dispatch({
                type: LOGIN_GOOGLE_SUCCESS,
                payload: result
            })
        }
    } catch (e) {
        dispatch({
            type: LOGIN_GOOGLE_FAILED
        })
    }

};

const saveUserToDatabase = ({name, surname, email, photoUrl}) => {
    firebase.auth().createUserWithEmailAndPassword()
};

const saveTokenToStorage = async (token) => {
    return await AsyncStorage.setItem('auth_token', token);
};