import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import Button from "../components/Button";
import strings from "../contants/strings";
import {connect} from 'react-redux';
import {loginWithFacebook} from '../actions';
import resolveAssetSource from 'resolveAssetSource';
import getScreenWidth from "../utils/getScreenWidth";
import isAndroid from "../utils/isAndroid";

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

        return (
            <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>

                <Text style={{
                    fontSize:20,
                    marginLeft: 30,
                    marginRight: 30,
                    textAlign: 'center',
                    fontFamily: isAndroid() ? 'Roboto' : 'Avenir',
                    color:'#38465a90',
                    borderWidth: 2,
                    borderColor: '#38465a60',
                    padding:10,
                    borderRadius: 10,
                    shadowColor: '#38465a',
                    shadowOpacity: 0.7,
                    shadowOffset: {
                        width: 0.6,
                        height: 0.8
                    },
                }}>
                    {strings.loginScreenText}
                </Text>

                <Image source={{uri: source.uri}}
                       style={{
                           resizeMode: Image.resizeMode.center,
                           width: desiredWidth,
                           height: desiredHeight,
                           borderWidth: 1,
                           borderColor: '#4dc8ff',
                           borderRadius: 10,
                           shadowColor: '#3366ff',
                           shadowOpacity: 0.7,
                           shadowOffset: {
                               width: 0.6,
                               height: 0.8
                           },
                       }}/>
                <Button onClick={this.onLoginWithFacebookButtonClicked} buttonText={strings.loginWithFacebook}
                        buttonStyle={{
                            shadowColor: '#3366ff',
                            shadowOpacity: 0.6,
                            shadowOffset: {
                                width: 0.6,
                                height: 0.8
                            },
                        }}/>
            </View>
        );
    }

    onLoginWithFacebookButtonClicked = () => {
        this.props.loginWithFacebook()
    }

}

export default connect(null, {loginWithFacebook})(AuthScreen);
