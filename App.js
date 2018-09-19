import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from "./store";
import SplashScreen from "./screens/SplashScreen";

export default class App extends React.Component {

  render() {
      /*
      const Navigator = createBottomTabNavigator({
          welcome: {screen: WelcomeScreen},
          auth: {screen: AuthScreen},
          main: {
              screen: createBottomTabNavigator({
                  map: {screen: MapScreen},
                  deck: {screen: DeckScreen},
                  review: {
                      screen: createStackNavigator({
                          review: {screen: ReviewScreen},
                          settings: {screen: SettingsScreen}
                      })
                  }
              })
          }
      });
      */

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
