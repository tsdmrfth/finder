import {AsyncStorage} from 'react-native';
import {TOKEN_CHECKED} from "./types";

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