import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import isAndroid from "../utils/isAndroid";

/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

class Button extends Component {

    render() {
        const {defaultButtonStyle, defaultButtonTextStyle} = styles;

        return (
            <TouchableOpacity style={[defaultButtonStyle, this.props.buttonStyle]} onPress={this.props.onClick}>
                <Text style={[defaultButtonTextStyle, this.props.buttonTextStyle]}>
                    {this.props.buttonText}
                </Text>
            </TouchableOpacity>
        );
    }

}

const styles = {
    defaultButtonStyle: {
        backgroundColor: '#4dc8ff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    defaultButtonTextStyle: {
        color: 'white',
        fontSize: 18,
        fontFamily: isAndroid() ? 'Roboto' : 'Avenir-Medium'
    }
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonStyle: PropTypes.object,
    buttonTextStyle: PropTypes.object,
    buttonText: PropTypes.string
};

export default Button;