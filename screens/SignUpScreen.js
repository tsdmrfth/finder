import React, {Component} from 'react';
import {Animated, Image, KeyboardAvoidingView, Text, View} from "react-native";
import getScreenWidth from "../utils/getScreenWidth";
import getScreenHeight from "../utils/getScreenHeight";
import colors from "../contants/colors";
import strings from "../contants/strings";
import Input from "../components/Input";
import ClickableIcon from "../components/ClickableIcon";
import {ImagePicker} from 'expo';
import {connect} from 'react-redux';
import {createUser, inputValueChangedOnSignUp} from '../actions';
import Button from "../components/Button";

/**
 * Created by Fatih Taşdemir on 22.09.2018
 */

const CARD_BOTTOM_MARGIN = getScreenHeight() * 0.2;

class SignUpScreen extends Component {

    state = {
        expanded: false,
        animation: new Animated.Value(0),
        image: undefined,
    };

    constructor() {
        super();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user_created){
            this.props.navigation.navigate('map')
        }
    }

    render() {
        const {
            overlayViewStyle,
            inputContainerStyle,
            inputStyle,
            imageContainerStyle,
            plusIconStyle,
            signUpButtonStyle
        } = styles;

        const pickerIconsContainerStyle = {
            borderRadius: 20,
            backgroundColor: colors.inputContainerBackgroundColor,
            position: 'absolute',
            padding: this.state.expanded ? 10 : 0
        };

        const pickerIconStyle = {
            width: this.state.expanded ? 40 : 0,
            height: this.state.expanded ? 40 : 0,
        };

        const leftContainerAnimatedStyle = {
            width: this.state.animation,
            right: this.state.animation
        };

        const rightContainerAnimatedStyle = {
            width: this.state.animation,
            left: this.state.animation
        };

        let image;
        if (this.state.image === undefined) {
            image = require('../assets/human.png')
        } else {
            image = {uri: this.state.image.uri};
        }

        return (
            <View style={{flex: 1}}>

                <Image
                    source={require('../assets/map.png')}
                    style={{width: getScreenWidth(), height: getScreenHeight()}}/>

                <View style={overlayViewStyle}/>

                <KeyboardAvoidingView style={inputContainerStyle} behavior={'padding'} enabled>

                    <View style={imageContainerStyle}>

                        <ClickableIcon
                            iconUri={require('../assets/plus_icon.png')}
                            onClick={this.onAddIconClicked}
                            iconStyle={plusIconStyle}/>

                        <Animated.View
                            style={[pickerIconsContainerStyle, leftContainerAnimatedStyle]}
                            onLayout={this.setMinHeight.bind(this)}>

                            <ClickableIcon
                                onClick={this.onOpenGalleryIconClicked}
                                iconStyle={pickerIconStyle}
                                iconUri={require('../assets/gallery_icon.png')}/>

                        </Animated.View>

                        <Animated.View
                            onLayout={this.setMinHeight.bind(this)}
                            style={[pickerIconsContainerStyle, rightContainerAnimatedStyle, {alignItems: 'flex-end'}]}>

                            <ClickableIcon
                                onClick={this.onOpenCameraIconClicked}
                                iconStyle={pickerIconStyle}
                                iconUri={require('../assets/camera_icon.png')}/>

                        </Animated.View>

                        <Image source={image} style={{width: 100, height: 100, borderRadius: 20}}/>

                    </View>

                    <Input
                        onChangeText={text => this.props.inputValueChangedOnSignUp({which: 'name', value: text})}
                        value={this.props.name}
                        placeholder={strings.enterYourName}
                        inputStyle={inputStyle}
                        blurOnSubmit={false}/>

                    <Input
                        onChangeText={text => this.props.inputValueChangedOnSignUp({which: 'surname', value: text})}
                        value={this.props.surname}
                        placeholder={strings.enterYourSurname}
                        inputStyle={inputStyle}/>

                    <Input
                        onChangeText={text => this.props.inputValueChangedOnSignUp({which: 'email', value: text})}
                        value={this.props.email}
                        placeholder={strings.enterYourEmail}
                        inputStyle={inputStyle}/>

                    <Input
                        onChangeText={text => this.props.inputValueChangedOnSignUp({which: 'password', value: text})}
                        value={this.props.password}
                        placeholder={strings.enterYourPassword}
                        inputStyle={inputStyle}
                        secureTextEntry/>

                    {this.renderErrorText()}

                    <Button
                        onClick={this.onSignUpButtonClicked}
                        buttonText={strings.signUp}
                        buttonStyle={signUpButtonStyle}
                        loading={this.props.create_loading}/>

                </KeyboardAvoidingView>

            </View>
        );
    }

    onAddIconClicked = () => {
        let callFunc = this.state.expanded ? this.collapseIconContainer : this.expandIconContainer;
        callFunc()
    };

    setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    };

    expandIconContainer = () => {
        this.setState({expanded: !this.state.expanded});

        this.state.animation.setValue(80);
        Animated.spring(this.state.animation, {
                toValue: 100,
                tension: 3,
                friction: 1
            }
        ).start();
    };

    collapseIconContainer = () => {
        this.setState({expanded: !this.state.expanded});

        this.state.animation.setValue(100);
        Animated.spring(this.state.animation, {
                toValue: 0,
                tension: 3,
                friction: 1
            }
        ).start();
    };

    onOpenGalleryIconClicked = async () => {
        let result = await ImagePicker.launchImageLibraryAsync();
        this.setState({image: result});
    };

    onOpenCameraIconClicked = async () => {
        let result = await ImagePicker.launchCameraAsync();
        console.log(result)
    };

    onSignUpButtonClicked = () => {
        if (!this.props.create_loading) {
            const {name, surname, email, password} = this.props;
            const image = this.state.image ? this.state.image.uri : null;
            this.props.createUser({name, surname, email, password, image})
        }
    };

    renderErrorText() {
        const errorTextStyle = {
            marginTop: this.props.hasError ? 10 : 0,
            color: colors.errorTextColor
        };

        let message = JSON.parse(JSON.stringify(this.props.error))['message'];
        if (this.props.hasError && message) {
            return (
                <Text style={errorTextStyle}>
                    {message}
                </Text>
            );
        }
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
        width: 140,
        height: 140,
        top: -120,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: colors.inputContainerBackgroundColor,
        borderRadius: 40,
        padding: 30
    },
    signUpButtonStyle: {
        backgroundColor: colors.loginButtonColor,
        width: '60%',
        height: 50,
        borderRadius: 25,
        marginTop: 20,
        marginBottom: 20
    },
    signUpButtonTextStyle: {
        fontFamily: strings.fontFamily,
        fontSize: 16
    },
    plusIconStyle: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: -20,
    }
};

const mapStateToProps = state => {
    const {name, surname, email, password, create_loading, error, user_created} = state.signUp;
    let hasError = error !== '';
    return {name, surname, email, password, create_loading, hasError, error, user_created}
};

export default connect(mapStateToProps, {createUser, inputValueChangedOnSignUp})(SignUpScreen);