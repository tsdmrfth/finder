import {AsyncStorage} from 'react-native';
import {Facebook, Google} from 'expo';
import {
    CHECK_TOKEN_START,
    FACEBOOK_LOGIN_FAILED,
    FACEBOOK_LOGIN_SUCCESS,
    LOGIN_GOOGLE_FAILED,
    LOGIN_GOOGLE_SUCCESS,
    TOKEN_CHECKED
} from "./types";
import strings from "../contants/strings";
import firebase from 'firebase';
import axios from 'axios';
import generatePassword from "../utils/generatePassword";
import {saveAuthenticatedToLocalStorage} from "../utils/saveAuthenticatedToLocalStorage";

/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

const FACEBOOK_GRAPH_URL = `https://graph.facebook.com/me?access_token=`;

export const checkAuthToken = () => async dispatch => {
    dispatch({
       type: CHECK_TOKEN_START
    });
    let isAuthenticated = await AsyncStorage.getItem('authenticated');
    setTimeout(()=> dispatch({
        type: TOKEN_CHECKED,
        payload: Boolean(isAuthenticated)
    }), 100);
};

export const loginWithFacebook = () => async dispatch => {
    try {
        let {type, token} = await Facebook.logInWithReadPermissionsAsync('300855640741130', {
            permissions: ['public_profile', 'email']
        });

        if (type === 'cancel') {
            return dispatch({
                type: FACEBOOK_LOGIN_FAILED
            })
        }

        await saveAuthenticatedToLocalStorage();
        let response = await axios.get(`${FACEBOOK_GRAPH_URL}${token}&fields=name,last_name,picture.type(large),email`);

        const {name, last_name, email} = response.data;
        let photoUrl = response.data.picture.data.url;
        console.log(photoUrl);
        await saveUserToDatabase({name, surname: last_name , photoUrl, email });
        dispatch({
            type: FACEBOOK_LOGIN_SUCCESS,
        })
    } catch (e) {
        dispatch({
            type: FACEBOOK_LOGIN_SUCCESS,
        });
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
            await saveAuthenticatedToLocalStorage();
            const {givenName, familyName, email, photoUrl} = result.user;
            await saveUserToDatabase({name: givenName, surname: familyName, email, photoUrl});

            dispatch({
                type: LOGIN_GOOGLE_SUCCESS,
            });
        }
    } catch (e) {
        dispatch({
            type: LOGIN_GOOGLE_FAILED
        })
    }

};

const saveUserToDatabase = async ({name, surname, email, photoUrl}) => {
    try {
        let create = await firebase.auth().createUserWithEmailAndPassword(email, generatePassword());
        let userRef = await firebase.database().ref(`/users/${create.user.uid}`);
        await userRef.set({
            photoUrl,
            name,
            surname,
            fullName: `${name} ${surname}`
        })
    } catch (e) {
        console.log(e)
    }

};