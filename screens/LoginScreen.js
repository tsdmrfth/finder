import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, View} from 'react-native';
import Input from "../components/Input";
import getScreenHeight from "../utils/getScreenHeight";
import colors from "../contants/colors";
import strings from "../contants/strings";
import Button from "../components/Button";
import {connect} from 'react-redux';
import {inputValueChanged, loginWithEmailAndPassword} from "../actions";
import getScreenWidth from "../utils/getScreenWidth";

/**
 * Created by Fatih Taşdemir on 21.09.2018
 */

const initialRegion = {
    longitude: 6.149086,
    latitude: 62.477246,
    latitudeDelta: 0.045,
    longitudeDelta: 0.02
};

const CARD_BOTTOM_MARGIN = getScreenHeight() * 0.3;

class LoginScreen extends Component {

    static navigationOptions = {
        headerTransparent: true,
        headerBackImage: () => {
            return (
                <Image
                    style={{width: 40, height: 40, marginTop: 10, marginLeft: 10}}
                    source={require('../assets/back_button_icon.png')}/>
            )
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props){
            if (nextProps.login_success) {
                console.log('success');
                this.props.navigation.navigate('map')
            }
        }
    }

    render() {
        const {overlayViewStyle, inputContainerStyle, inputStyle, imageContainerStyle, loginButtonStyle} = styles;

        return (
            <View style={{flex: 1}}>
                
                <View>
                    <Image
                        source={require('../assets/map.png')}
                        style={{width: getScreenWidth(), height: getScreenHeight()}}/>
                </View>

                <View style={overlayViewStyle}/>

                <KeyboardAvoidingView style={inputContainerStyle} behavior={'padding'} enabled>

                    <View style={imageContainerStyle}>
                        <Image style={{width: 200, height: 60}} source={require('../assets/theree_monkey.png')}/>
                    </View>

                    <Input
                        onChangeText={text => this.props.inputValueChanged({which: 'email', value: text})}
                        value={this.props.email}
                        placeholder={strings.email}
                        inputStyle={inputStyle}/>

                    <Input
                        onChangeText={text => this.props.inputValueChanged({which: 'password', value: text})}
                        value={this.props.password}
                        placeholder={strings.password}
                        inputStyle={inputStyle}/>

                    <Button
                        onClick={this.onLoginButtonClicked}
                        buttonText={strings.login}
                        buttonStyle={loginButtonStyle}
                        loading={this.props.login_loading}/>

                </KeyboardAvoidingView>

            </View>
        );
    }

    onLoginButtonClicked = () => {
        const {email, password} = this.props;
        this.props.loginWithEmailAndPassword({email: email, password: password})
    };

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
        left: 40,
        right: 40,
        top: -60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: colors.inputContainerBackgroundColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    loginButtonStyle: {
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
    }
};

const mapStateToProps = state => {
    const {email, password, login_loading, login_success} = state.login;
    return {email, password, login_loading, login_success}
};

export default connect(mapStateToProps, {loginWithEmailAndPassword, inputValueChanged})(LoginScreen);