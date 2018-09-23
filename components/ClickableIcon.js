import React, {Component} from 'react';
import {Animated, Image, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';

/**
 * Created by Fatih Taşdemir on 22.09.2018
 */

class ClickableIcon extends Component {

    constructor() {
        super();
        this.scale = new Animated.Value(1)
    }

    componentDidMount() {
        setTimeout(() => {
            this.handleOnPressIn(() => {
                this.handleOnPressOut()
            })
        }, 700)
    }

    render() {
        const animatedStyle = {
            transform: [{ scale: this.scale}]
        };

        return (
            <TouchableWithoutFeedback
                onPress={this.props.onClick}
                onPressIn={this.handleOnPressIn}
                onPressOut={this.handleOnPressOut}>
                <Animated.View style={[animatedStyle, this.props.iconStyle]}>
                    <Image style={this.props.iconStyle} source={this.props.iconUri}/>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }

    handleOnPressIn = (callback) => {
        Animated.spring(this.scale, {
            toValue: 0.4,
            tension: 3
        }).start();

        setTimeout(() => {
            try {
                callback()
            } catch (e) {
            }
        }, 100)
    };

    handleOnPressOut = () => {
        Animated.spring(this.scale, {
            toValue: 1.1,
            tension: 3
        }).start()
    }

}

ClickableIcon.propTypes = {
    onClick: PropTypes.func,
    iconStyle: PropTypes.any,
    iconUri: PropTypes.any,
};

export default ClickableIcon;