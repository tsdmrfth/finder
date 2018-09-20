import {Dimensions} from 'react-native';

/**
 * Created by Fatih Taşdemir on 20.09.2018
 */

const getScreenWidth = () => {
    return Dimensions.get('window').width
};

export default getScreenWidth;