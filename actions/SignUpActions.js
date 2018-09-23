import firebase from 'firebase';
import {ImageManipulator} from 'expo';
import {CREATE_USER, CREATE_USER_FAILED, CREATE_USER_SUCCESS, INPUT_VALUE_CHANGED} from "./types";
import {saveAuthenticatedToLocalStorage} from "../utils/saveAuthenticatedToLocalStorage";

/**
 * Created by Fatih Taşdemir on 23.09.2018
 */

export const inputValueChangedOnSignUp = ({which, value}) => {
    return {
        type: INPUT_VALUE_CHANGED,
        payload: {which, value}
    }
};

export const createUser = ({name, surname, email, password, image}) => {
    return async (dispatch) => {
        dispatch({
            type: CREATE_USER
        });

        try {
            let created = await firebase.auth().createUserWithEmailAndPassword(email, password);

            let userRef = firebase.database().ref(`/users/${created.user.uid}`);
            await userRef.update({
                name,
                surname,
                fullName: `${name} ${surname}`
            });

            if (image) {
                let {uri} = await ImageManipulator.manipulate(image, null, {
                    compress: 0.5
                });

                const response = await fetch(uri);
                const blob = await response.blob();
                const ref = firebase.storage().ref().child(`/images/${created.user.uid}`);
                await ref.put(blob);

                let photoURL = await ref.getDownloadURL();
                await userRef.update({photoURL});
                await setUserCreated(dispatch)
            }

            await setUserCreated(dispatch)

        } catch (e) {
            console.log(e);
            dispatch({
                type: CREATE_USER_FAILED,
                payload: e
            })
        }
    }
};

const setUserCreated = async (dispatch) => {
    try {
        await saveAuthenticatedToLocalStorage();

        dispatch({
            type: CREATE_USER_SUCCESS
        })
    } catch (e) {
        console.log(e)
    }
};