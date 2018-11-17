import Platform from 'react-native';

/**
 * Created by Fatih Taşdemir on 18.09.2018
 */

export default function isAndroid() {
    return Platform.OS === 'android'
};