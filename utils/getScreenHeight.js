import {Dimensions} from 'react-native';

/**
 * Created by Fatih Taşdemir on 20.09.2018
 */

const getScreenHeight = () => {
    return Dimensions.get('window').height
};

export default getScreenHeight;