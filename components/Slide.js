import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from "react-native";
import PropTypes from 'prop-types';
import isAndroid from "../utils/isAndroid";
import Indicator from "./Indicator";
import Button from "./Button";
import strings from "../contants/strings";

/**
 * Created by Fatih Taşdemir on 18.09.2018
 */

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slide extends Component {

    render() {
        const {indicatorContainerStyle, containerViewStyle} = styles;
        return (
            <View style={containerViewStyle}>
                <ScrollView
                    style={{flex: 1}}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}>
                    {this.renderSlides()}
                </ScrollView>
                <View style={indicatorContainerStyle}>
                    {this.renderIndicators()}
                </View>
            </View>
        );
    }

    renderSlides() {
        const {slideContainerViewStyle, titleStyle} = styles;
        return this.props.data.map((item, index) => {
            return (
                <View key={item.id} style={slideContainerViewStyle}>
                    <Image style={{width: 100, height: 100}} source={item.image}/>
                    <Text style={titleStyle}>{item.title}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        })
    }

    renderIndicators() {
        return this.props.data.map((item) => {
            return <Indicator key={item.id}/>
        })
    }

    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return this.renderCompleteButton();
        }
    }

    renderCompleteButton() {
        return (
            <Button
                onClick={this.props.onCompleteCallback}
                buttonText={strings.letsGo}
                buttonStyle={{marginTop: 20}}/>
        )
    }

}

const styles = {
    containerViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slideContainerViewStyle: {
        width: SCREEN_WIDTH,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        fontFamily: strings.fontFamily,
    },
    indicatorContainerStyle: {
        position: 'absolute',
        zIndex: 2,
        bottom: 40,
        flexDirection: 'row',
    },
};

Slide.propTypes = {
    data: PropTypes.array,
    onCompleteCallback: PropTypes.func
};

export default Slide;
