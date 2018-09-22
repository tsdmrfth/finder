import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, TouchableOpacity} from 'react-native';
import isAndroid from "../utils/isAndroid";
import strings from "../contants/strings";

/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

class Button extends Component {

    render() {
        const {defaultButtonStyle, defaultButtonTextStyle} = styles;
        const iconStyle = {
            width: this.props.imageIcon === undefined ? 0 : 30,
            height: this.props.imageIcon === undefined ? 0 : 30,
        };

        return (
            <TouchableOpacity style={[defaultButtonStyle, this.props.buttonStyle]} onPress={this.props.onClick}>
                <Image style={iconStyle} source={this.props.imageIcon} resizeMode={'cover'}/>
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
        flexDirection: 'row'
    },
    defaultButtonTextStyle: {
        color: 'white',
        fontSize: 18,
        fontFamily: strings.fontFamily,
    }
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonStyle: PropTypes.object,
    buttonTextStyle: PropTypes.object,
    buttonText: PropTypes.string,
    imageIcon: PropTypes.any,
};

export default Button;