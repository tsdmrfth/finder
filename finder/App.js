import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./store";
import firebase from 'firebase'
import SplashScreen from "./screens/SplashScreen";
import firebaseConfig from "./firebase/firebaseConfig";

export default class App extends React.Component {

    componentWillMount() {
        const config = firebaseConfig;
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.containerViewStyle}>
                    <SplashScreen/>
                </View>
            </Provider>
        );
    }

}

const styles = StyleSheet.create({
  containerViewStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});