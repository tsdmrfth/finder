import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import MapScreen from "./MapScreen";
import DeckScreen from "./DeckScreen";
import SettingsScreen from "./SettingsScreen";
import {Image, SafeAreaView, AsyncStorage, View} from "react-native";
import {checkAuthToken} from '../actions';
import WelcomeScreen from "./WelcomeScreen";
import AuthScreen from "./AuthScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import ReviewScreen from "./ReviewScreen";
import MainTabBar from "../components/MainTabBar";
import SvgComponent from "../components/SvgComponent";

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
    },
    {
        initialRouteName: "map",
        navigationOptions: {
            tabBarVisible: true,
            tabBarComponent: props => (
                <MainTabBar
                    onMapIconClicked={() => {
                        props.navigation.navigate('map')
                    }}
                    onProfileIconClicked={() => {
                        props.navigation.navigate('deck')
                    }}
                    onSettingIconClicked={() => {
                        props.navigation.navigate('review')
                    }}/>
            )
        }
    });
//npm uninstall react-native-svg-uri --save
class SplashScreen extends Component {

    componentWillMount() {
        this.props.checkAuthToken();
    }

    render() {
        const SignedFlow = createBottomTabNavigator({
            main: {screen: mainFlow}
            },
            {
                lazy: true,
                navigationOptions: {
                    tabBarVisible: false,

                }
            });

        const UnsignedFlow = createBottomTabNavigator({
                welcome: {screen: WelcomeScreen},
                auth: {
                    screen: createStackNavigator({
                        initial: {screen: AuthScreen},
                            login: {screen: LoginScreen},
                            signUp: {screen: SignUpScreen}
                        },
                        {
                            navigationOptions: {
                                headerTransparent: true,
                                headerBackImage: () => {
                                    return (
                                        <Image
                                            style={{width: 40, height: 40, marginTop: 10, marginLeft: 10}}
                                            source={require('../assets/back_button_icon.png')}/>
                                    )
                                }
                            }
                        })
                },
                main: {screen: mainFlow}
            },
            {
                navigationOptions: {
                    tabBarVisible: false
                },
                lazy: true,
            });

        if (this.props.loading){
            return this.renderSplashView()
        } else if (this.props.hasToken) {
            return <SignedFlow/>
        }

        return (
            <View>
                <SvgComponent/>
            </View>
        )
    }

    renderSplashView() {
        return (
            <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/icon.png')} style={{width: 100, height: 100}}/>
            </SafeAreaView>
        );
    }

}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        hasToken: state.auth.hasToken
    }
};

export default connect(mapStateToProps, {checkAuthToken})(SplashScreen);