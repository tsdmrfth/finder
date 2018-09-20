import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./store";
import firebase from 'firebase'
import SplashScreen from "./screens/SplashScreen";

export default class App extends React.Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyASkObTeoUxgKZKGImNHhrGEbuuL2Q_xOg",
            authDomain: "finder-d5d56.firebaseapp.com",
            databaseURL: "https://finder-d5d56.firebaseio.com",
            projectId: "finder-d5d56",
            storageBucket: "",
            messagingSenderId: "361826157494"
        };
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
