import React, {Component} from 'react';
import {Animated, Image, Text, View} from 'react-native';
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
const BUTTONS_INITIAL_WIDTH = SCREEN_WIDTH * 0.6;
const BUTTONS_MAX_WIDTH = SCREEN_WIDTH - 2 * 20;

class AuthScreen extends Component {

    constructor() {
        super();

        this.buttonWith = new Animated.Value(BUTTONS_INITIAL_WIDTH);
    }

    componentDidMount() {
        Animated.spring(this.buttonWith, {
            toValue: BUTTONS_MAX_WIDTH,
            duration: 2000
        }).start(() => {
        })
    }

    render(){
        const {desiredWidth, desiredHeight} = this.generateSource();
        const {
            rootContainerStyle,
            cardContainerStyle,
            overlayViewContainer,
            infoTextStyle,
            imageStyle,
            facebookButtonStyle,
            googleButtonStyle,
            googleButtonTextStyle,
            emailButtonStyle
        } = styles;

        const buttonsContainerViewStyle = {
            width: this.buttonWith
        };

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

                <Animated.View style={buttonsContainerViewStyle}>

                    <Button
                        onClick={this.onLoginWithFacebookButtonClicked}
                        buttonText={strings.loginWithFacebook}
                        buttonStyle={facebookButtonStyle}
                        imageIcon={require('../assets/facebook_icon.png')}/>

                    <Button
                        onClick={this.onLoginWithGoogleButtonClicked}
                        buttonText={strings.loginWithGoogle}
                        buttonStyle={googleButtonStyle}
                        buttonTextStyle={googleButtonTextStyle}
                        imageIcon={require('../assets/google_icon.png')}/>

                    <Button
                        onClick={this.onLoginWithEmailButtonClicked}
                        buttonText={strings.loginWithEmail}
                        buttonStyle={emailButtonStyle}
                        imageIcon={require('../assets/email_icon.png')}/>

                </Animated.View>

            </View>
        );
    }

    onLoginWithFacebookButtonClicked = () => {
        this.props.loginWithFacebook()
    };

    onLoginWithGoogleButtonClicked = () => {
        //this.props.loginWithFacebook()
    };

    onLoginWithEmailButtonClicked = () => {
        //this.props.loginWithFacebook()
    };

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
    facebookButtonStyle: {
        width: '100%',
        backgroundColor: colors.facebookButtonColor,
        shadowColor: '#3366ff',
        shadowOpacity: 0.6,
        shadowOffset: {
            width: 0.6,
            height: 0.8
        },
    },
    googleButtonStyle: {
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0.4,
            height: 0.4
        },
        marginTop: 15,
    },
    googleButtonTextStyle: {
        color: colors.googleButtonTextColor
    },
    emailButtonStyle: {
        backgroundColor: colors.emailButtonColor,
        shadowColor: colors.emailButtonColor,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0.4,
            height: 0.4
        },
        marginTop: 15,
    },
    emailButtonTextStyle: {
        color: colors.white
    },
};

export default connect(null, {loginWithFacebook})(AuthScreen);
