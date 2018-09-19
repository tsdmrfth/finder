import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';

/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

class Button extends Component {

    render() {
        const {defaultButtonStyle, defaultButtonTextStyle} = styles;

        return (
            <View style={[this.props.buttonStyle, defaultButtonStyle]}>
                <TouchableOpacity onPress={this.props.onClick}>
                    <Text style={[this.props.buttonTextStyle, defaultButtonTextStyle]}>{this.props.buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = {
    defaultButtonStyle: {
        backgroundColor: '#4dc8ff',
        padding: 10,
        borderRadius: 5
    },
    defaultButtonTextStyle: {
        color: 'white',
        fontSize: 18
    }
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonStyle: PropTypes.object,
    buttonTextStyle: PropTypes.object,
    buttonText: PropTypes.string
};

export default Button;