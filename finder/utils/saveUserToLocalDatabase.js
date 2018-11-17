import {AsyncStorage} from "react-native";

/**
 * Created by Fatih Taşdemir on 22.09.2018
 */

export const saveUserToLocalDatabase = ({fullName, photoUrl, email}) => {
    return AsyncStorage.setItem('user', {fullName, photoUrl, email})
};