import {AsyncStorage} from "react-native";

/**
 * Created by Fatih Taşdemir on 22.09.2018
 */

export const saveAuthenticatedToLocalStorage = async () => {
    return await AsyncStorage.setItem('authenticated', 'true');
};