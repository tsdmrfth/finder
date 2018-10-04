import React, {Component} from 'react';
import {TextInput} from "react-native";
import colors from "../contants/colors";
import PropTypes from 'prop-types';

/**
 * Created by Fatih Taşdemir on 20.09.2018
 */

class Input extends Component {

    state = {
        focused: false
    };

    render() {
        const inputStyle = {
            backgroundColor: colors.white,
            borderRadius: 20,
            height: 50,
            borderColor: colors.inputFocusedColor,
            borderWidth: this.state.focused ? 2 : 0
        };

        return (
            <TextInput
                {...this.props}
                style={[inputStyle, this.props.inputStyle]}
                onFocus={this.handleOnFocus}
                onBlur={this.handleOnBlur}
                enablesReturnKeyAutomatically/>
        );
    }

    handleOnFocus = () => {
        this.setState({focused: true})
    };

    handleOnBlur = () => {
        this.setState({focused: false})
    }

}

Input.propTypes = {
    inputStyle: PropTypes.object,
};

export default Input;