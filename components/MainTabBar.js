import React, {Component} from 'react';
import {View} from "react-native";
import getScreenWidth from "../utils/getScreenWidth";
import colors from "../contants/colors";
import ClickableIcon from "./ClickableIcon";
import PropTypes from 'prop-types';

/**
 * Created by Fatih Taşdemir on 25.09.2018
 */

class MainTabBar extends Component {

    render() {
        const {tabBarContainerStyle, iconStyle, mapIconStyle, transparentCircleStyle} = styles;
        return (
            <View style={tabBarContainerStyle}>
                <ClickableIcon
                    iconUri={require('../assets/profile_icon.png')} iconStyle={iconStyle}
                    animateOnStart={false}
                    onClick={this.props.onProfileIconClicked}/>
                <ClickableIcon
                    iconUri={require('../assets/map_icon.png')} iconStyle={mapIconStyle}
                    animateOnStart={false}
                    onClick={this.props.onMapIconClicked}/>
                <ClickableIcon
                    iconUri={require('../assets/settings_icon.png')} iconStyle={iconStyle}
                    animateOnStart={false}
                    onClick={this.props.onSettingIconClicked}/>
                <View style={transparentCircleStyle}/>
            </View>
        );
    }
}

const styles = {
    tabBarContainerStyle: {
        backgroundColor: '#d7e7ca',
        width: getScreenWidth(),
        height: 60,
        shadowColor: colors.signUpEmailButtonColor,
        shadowOpacity: 0.6,
        shadowOffset: {
            width: 0.3,
            height: 0
        },
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        zIndex: 1,
        bottom: 0
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    transparentCircleStyle: {
        backgroundColor: 'transparent',
        width: 70,
        height: 70,
        zIndex:1,
        borderRadius: 35,
        position: 'absolute',
        bottom: 50
    },
    mapIconStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        shadowColor: colors.signUpEmailButtonColor,
        shadowOpacity: 0.6,
        shadowOffset: {
            width: 0.3,
            height: 0.3
        },
        marginBottom: 50,
        position: 'absolute',
        zIndex: 2
    }
};

MainTabBar.propTypes = {
    onProfileIconClicked: PropTypes.func,
    onMapIconClicked: PropTypes.func,
    onSettingIconClicked: PropTypes.func,
};

export default MainTabBar;