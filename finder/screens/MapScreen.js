import React, {Component} from 'react';
import {Animated, Keyboard, View} from 'react-native';
import {MapView} from 'expo';
import {connect} from 'react-redux';
import {fetchJobs} from '../actions';
import Button from "../components/Button";
import colors from "../contants/colors";
import strings from "../contants/strings";
import Input from "../components/Input";
import getScreenWidth from "../utils/getScreenWidth";

const SCREEN_WIDTH = getScreenWidth();
const INITIAL_MARGIN = (SCREEN_WIDTH - SCREEN_WIDTH * 0.7) / 2;

class MapScreen extends Component {

    state = {
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        },
        expanded: false,
    };

    constructor() {
        super();
    }

    render(){
        const {buttonStyle} = styles;
        const inputContainerStyle = {
            position: 'absolute',
            top: 50,
            left: INITIAL_MARGIN,
            right: INITIAL_MARGIN,
            backgroundColor: colors.searchInputColor + '70',
            height: 50,
            borderWidth: 2,
            borderColor: colors.searchInputColor,
            borderRadius: this.state.expanded ? 5 : 15,
            alignItems: 'center',
            justifyContent: 'center'
        };

        const inputStyle = {
            color: colors.white,
            backgroundColor: 'transparent',
            paddingLeft: 15,
            paddingRight: 15,
            alignSelf: 'stretch',
            borderWidth: 0
        };

        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}/>

                <Animated.View style={inputContainerStyle}>
                    <Input
                        onBlur={this.handleOnBlur}
                        onFocus={this.handleOnFocus}
                        placeholder={strings.searchBarPlaceholder}
                        placeholderTextColor={colors.white}
                        inputStyle={inputStyle}/>
                </Animated.View>

                <View>
                    <Button
                        onClick={this.onSetMyLocationButtonClicked}
                        buttonStyle={buttonStyle}
                        buttonText={strings.setMyLocation}/>
                </View>
          </View>
        );
    }

    onRegionChangeComplete = region => {
        Keyboard.dismiss();
        this.setState({region});
        this.props.fetchJobs(region)
    };

    onSetMyLocationButtonClicked = () => {
        console.log('hello farhat')
    };

}

const styles = {
    buttonStyle: {
        backgroundColor: colors.infoTextColor,
        borderRadius: 25,
        width: '60%',
        height: 50,
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0.6,
            height: 0.6
        },
        shadowOpacity: 0.4,
        elevation: 0.6
    },
    buttonTextStyle: {
        color: colors.white,
    }
};

const mapStateToProps = state => {
    return {data: state.jobs.data}
};

export default connect(mapStateToProps, {fetchJobs})(MapScreen)