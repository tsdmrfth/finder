import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import Button from "../components/Button";
import strings from "../contants/strings";
import {connect} from 'react-redux';
import {loginWithFacebook} from '../actions';
import resolveAssetSource from 'resolveAssetSource';
import getScreenWidth from "../utils/getScreenWidth";
import isAndroid from "../utils/isAndroid";
import colors from "../contants/colors";

const icon = require('../assets/job_finder.png');
let source = resolveAssetSource(icon);
const SCREEN_WIDTH = getScreenWidth();

class AuthScreen extends Component {

    generateSource = () => {
        let width = source.width;
        let height = source.height;

        let desiredWidth = SCREEN_WIDTH * 0.6;
        let imageRatio;

        if (width > height) {
            if (width > SCREEN_WIDTH) {
                imageRatio = SCREEN_WIDTH / width;
            } else {
                imageRatio = width / SCREEN_WIDTH;
            }
        } else {
            if (width > SCREEN_WIDTH) {
                imageRatio = SCREEN_WIDTH / width;
            } else {
                imageRatio = width / SCREEN_WIDTH;
            }
        }

        let desiredHeight = height * imageRatio;

        return {desiredWidth, desiredHeight};
    };

    render(){
        const {desiredWidth, desiredHeight} = this.generateSource();
        const {rootContainerStyle, cardContainerStyle, overlayViewContainer, infoTextStyle, imageStyle, loginFacebookButtonStyle} = styles;

        return (
            <View style={rootContainerStyle}>

                <View style={cardContainerStyle}>

                    <View style={overlayViewContainer}>
                        <Image source={require('../assets/hey.jpg')}
                               style={{width: 50, height: 50}}/>
                    </View>

                    <Text style={infoTextStyle}>
                        {strings.loginScreenText}
                    </Text>

                </View>

                <Image source={{uri: source.uri}}
                       style={[imageStyle, {width: desiredWidth, height: desiredHeight}]}/>

                <Button
                    onClick={this.onLoginWithFacebookButtonClicked}
                    buttonText={strings.loginWithFacebook}
                    buttonStyle={loginFacebookButtonStyle}/>

            </View>
        );
    }

    onLoginWithFacebookButtonClicked = () => {
        this.props.loginWithFacebook()
    }

}

const styles = {
    rootContainerStyle: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    cardContainerStyle: {
        backgroundColor: colors.loginPageInfoCardColor,
        borderRadius: 10,
        shadowColor: colors.infoTextColor,
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0.2,
            height: 0.4
        },
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayViewContainer: {
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        position: 'absolute',
        top: -60,
        backgroundColor: colors.loginPageInfoCardColor,
    },
    infoTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: isAndroid() ? 'Roboto' : 'Avenir',
        padding: 10,
        color: colors.infoTextColor,
        marginTop: 10
    },
    imageStyle: {
        resizeMode: Image.resizeMode.center,
        borderWidth: 1,
        borderColor: '#4dc8ff',
        borderRadius: 10,
        shadowColor: '#3366ff',
        shadowOpacity: 0.7,
        shadowOffset: {
            width: 0.6,
            height: 0.8
        },
    },
    loginFacebookButtonStyle: {
        shadowColor: '#3366ff',
        shadowOpacity: 0.6,
        shadowOffset: {
            width: 0.6,
            height: 0.8
        },
    }
};

export default connect(null, {loginWithFacebook})(AuthScreen);
