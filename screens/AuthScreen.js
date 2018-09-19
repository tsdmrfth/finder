import React, {Component} from 'react';
import {View} from 'react-native';
import Button from "../components/Button";
import strings from "../contants/strings";
import {connect} from 'react-redux';
import {loginWithFacebook} from '../actions';

class AuthScreen extends Component {

    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button onClick={this.onLoginWithFacebookButtonClicked} buttonText={strings.loginWithFacebook}/>
            </View>
        );
    }

    onLoginWithFacebookButtonClicked = () => {
        this.props.loginWithFacebook()
    }

}

export default connect(null, {loginWithFacebook})(AuthScreen);
