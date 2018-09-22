import React, {Component} from 'react';
import {Image, ImageBackground, KeyboardAvoidingView, View} from "react-native";
import getScreenWidth from "../utils/getScreenWidth";
import getScreenHeight from "../utils/getScreenHeight";
import colors from "../contants/colors";
import strings from "../contants/strings";
import Input from "../components/Input";
import ClickableIcon from "../components/ClickableIcon";

/**
 * Created by Fatih Taşdemir on 22.09.2018
 */

const CARD_BOTTOM_MARGIN = getScreenHeight() * 0.3;

class SignUpScreen extends Component {

    render() {
        const {overlayViewStyle, inputContainerStyle, inputStyle, imageContainerStyle, loginButtonStyle, plusIconStyle} = styles;

        return (
            <View style={{flex: 1}}>

                <Image
                    source={require('../assets/map.png')}
                    style={{width: getScreenWidth(), height: getScreenHeight()}}/>

                <View style={overlayViewStyle}/>

                <KeyboardAvoidingView style={inputContainerStyle} behavior={'padding'} enabled>

                    <ImageBackground style={imageContainerStyle} source={require('../assets/human.png')}>
                        <ClickableIcon iconUri={require('../assets/plus_icon.png')}
                                       iconStyle={plusIconStyle}/>
                    </ImageBackground>

                    <Input
                        onChangeText={text => this.props.inputValueChanged({which: 'name', value: text})}
                        value={this.props.name}
                        placeholder={strings.enterYourName}
                        inputStyle={inputStyle}/>

                    <Input
                        onChangeText={text => this.props.inputValueChanged({which: 'surname', value: text})}
                        value={this.props.surname}
                        placeholder={strings.enterYourSurname}
                        inputStyle={inputStyle}/>

                    <Input
                        onChangeText={text => this.props.inputValueChanged({which: 'email', value: text})}
                        value={this.props.email}
                        placeholder={strings.enterYourEmail}
                        inputStyle={inputStyle}/>

                    <Input
                        onChangeText={text => this.props.inputValueChanged({which: 'password', value: text})}
                        value={this.props.password}
                        placeholder={strings.enterYourPassword}
                        inputStyle={inputStyle}/>

                </KeyboardAvoidingView>

            </View>
        );
    }

}

const styles = {
    overlayViewStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.overlayColor
    },
    inputContainerStyle: {
        alignItems: 'center',
        position: 'absolute',
        bottom: CARD_BOTTOM_MARGIN,
        left: 10,
        right: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.inputContainerBackgroundColor
    },
    inputStyle: {
        backgroundColor: colors.white,
        paddingLeft: 20,
        paddingRight: 20,
        color: colors.loginPageInputTextColor,
        alignSelf: 'stretch',
        marginTop: 10,
        marginBottom: 10,
        fontFamily: strings.fontFamily,
    },
    imageContainerStyle: {
        position: 'absolute',
        width: 120,
        height: 120,
        top: -120,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.inputContainerBackgroundColor,
        borderRadius: 40,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    signUpButtonStyle: {
        backgroundColor: colors.loginButtonColor,
        width: '60%',
        height: 50,
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 20
    },
    loginButtonTextStyle: {
        fontFamily: strings.fontFamily,
        fontSize: 16
    },
    plusIconStyle: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: -5,
        right: -20
    }
};

export default SignUpScreen;