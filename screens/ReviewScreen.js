import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import strings from "../contants/strings";
import isAndroid from "../utils/isAndroid";

export default class ReviewScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: strings.reviewJobs,
            headerRight: (
                <Button title={strings.settings} onPress={() => {
                    navigation.navigate('settings')
                }}/>
            ),
            style: {
                marginTop: isAndroid() ? 24 : 0
            }
        }
    };

    render(){
        return (
          <View>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
            <Text>ReviewScreen</Text>
          </View>
        );
    }

}