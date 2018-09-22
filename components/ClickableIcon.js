import React, {Component} from 'react';
import {Animated, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

/**
 * Created by Fatih Taşdemir on 22.09.2018
 */

class ClickableIcon extends Component {

    constructor() {
        super();
        this.scale = new Animated.Value(0.4)
    }

    componentDidMount() {
        setTimeout(() => {
            Animated.spring(this.scale, {
                toValue: 1,
                friction: 0.9,
                tension: 0.3
            }).start()
        }, 400);
    }

    render() {
        const animatedStyle = {
            transform: [{ scale: this.scale}]
        };

        return (
            <TouchableOpacity onPress={this.props.onClick} style={this.props.iconStyle}>
                <Animated.View style={animatedStyle}>
                    <Image style={this.props.iconStyle} source={this.props.iconUri}/>
                </Animated.View>
            </TouchableOpacity>
        );
    }

}

ClickableIcon.propTypes = {
    onClick: PropTypes.func,
    iconStyle: PropTypes.any,
    iconUri: PropTypes.any,
};

export default ClickableIcon;