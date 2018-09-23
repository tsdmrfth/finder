import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, Image, Text, TouchableWithoutFeedback} from 'react-native';
import strings from "../contants/strings";

/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

class Button extends Component {

    constructor() {
        super();
        this.scale = new Animated.Value(1);
    }

    render() {
        const {defaultButtonStyle} = styles;
        const iconStyle = {
            width: this.props.imageIcon === undefined ? 0 : 30,
            height: this.props.imageIcon === undefined ? 0 : 30,
        };

        const animatedStyle = {
            transform: [{scale: this.scale}]
        };

        return (
            <TouchableWithoutFeedback
                onPressOut={this.handleOnPressOut}
                onPressIn={this.handleOnPressIn}>
                <Animated.View style={[animatedStyle, defaultButtonStyle, this.props.buttonStyle]}>
                    <Image style={iconStyle} source={this.props.imageIcon} resizeMode={'cover'}/>
                    {this.renderButtonInside()}
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }

    click() {
        this.handleOnPressOut()
    }

    renderButtonInside() {
        if (this.props.loading) {
            return <Image source={require('../assets/loading.gif')} style={{width: 40, height: 40}}/>
        }

        return (
            <Text style={[styles.defaultButtonTextStyle, this.props.buttonTextStyle]}>
                {this.props.buttonText}
            </Text>
        );
    }

    handleOnPressIn = () => {
        Animated.spring(this.scale, {
            toValue: 0.6,
        }).start()
    };

    handleOnPressOut = () => {
        setTimeout(() => {
            this.props.onClick()
        }, 300);

        Animated.spring(this.scale, {
            toValue: 1,
            duration: 1
        }).start()
    };

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
    loading: PropTypes.bool
};

export default Button;