import React, {Component} from 'react';
import {TextInput} from "react-native";
import colors from "../contants/colors";
import PropTypes from 'prop-types';

/**
 * Created by Fatih Taşdemir on 20.09.2018
 */

class Input extends Component {

    render() {
        const {inputStyle} = styles;
        return (
            <TextInput
                {...this.props}
                style={[inputStyle, this.props.inputStyle]}
            />
        );
    }
}

const styles = {
    inputStyle: {
        backgroundColor: colors.white,
        borderRadius: 20,
        height: 50,
    }
};

Input.propTypes = {
    inputStyle: PropTypes.object,
};

export default Input;