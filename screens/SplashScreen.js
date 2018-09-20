import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import WelcomeScreen from "./WelcomeScreen";
import AuthScreen from "./AuthScreen";
import MapScreen from "./MapScreen";
import DeckScreen from "./DeckScreen";
import ReviewScreen from "./ReviewScreen";
import SettingsScreen from "./SettingsScreen";
import {Image, View, AsyncStorage} from "react-native";
import {checkFacebookToken} from '../actions';

/**
 * Created by Fatih Taşdemir on 19.09.2018
 */

const mainFlow = createBottomTabNavigator({
    map: {screen: MapScreen},
    deck: {screen: DeckScreen},
    review: {
        screen: createStackNavigator({
            review: {screen: ReviewScreen},
            settings: {screen: SettingsScreen}
        })
    }
});

class SplashScreen extends Component {

    componentWillMount() {
        this.props.checkFacebookToken();
        AsyncStorage.removeItem('fb_token')
    }

    render() {
        const SignedFlow = createBottomTabNavigator({
            main: {screen: mainFlow}
            },
            {
                lazy: true,
                navigationOptions: {
                    tabBarVisible: false
                }
            },);

        const UnsignedFlow = createBottomTabNavigator({
            welcome: {screen: WelcomeScreen},
            auth: {screen: AuthScreen},
            main: {screen: mainFlow}
            },
            {
                navigationOptions: {
                    tabBarVisible: false,
                },
                lazy: true,
            });

        if (this.props.loading){
            return this.renderSplashView()
        } else if (this.props.hasToken) {
            return <SignedFlow/>
        }

        return <UnsignedFlow/>
    }

    renderSplashView() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/icon.png')} style={{width: 100, height: 100}}/>
            </View>
        );
    }

}

const mapStateToProps = state => {
    console.log(state);
    return {
        loading: state.auth.loading,
        hasToken: state.auth.hasToken
    }
};

export default connect(mapStateToProps, {checkFacebookToken})(SplashScreen);