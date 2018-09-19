import {AsyncStorage} from 'react-native';
import {Facebook} from 'expo';
import {FACEBOOK_LOGIN_FAILED, FACEBOOK_LOGIN_SUCCESS, TOKEN_CHECKED} from "./types";

/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

export const checkFacebookToken = () => async dispatch => {
    let facebookToken = await AsyncStorage.getItem('fb_token');
    setTimeout(()=> dispatch({
        type: TOKEN_CHECKED,
        payload: facebookToken !== undefined && facebookToken !== '' && facebookToken !== null
    }), 3000);
};

export const loginWithFacebook = () => async dispatch => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('300855640741130', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({
            type: FACEBOOK_LOGIN_FAILED
        })
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({
        type: FACEBOOK_LOGIN_SUCCESS,
    })
};