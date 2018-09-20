import React, {Component} from 'react';
import {View} from 'react-native';
import {MapView} from 'expo';
import {connect} from 'react-redux';
import {fetchJobs} from '../actions';
import Button from "../components/Button";
import colors from "../contants/colors";
import strings from "../contants/strings";

class MapScreen extends Component {

    state = {
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    };

    render(){
        const {buttonStyle} = styles;

        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}/>
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
        this.setState({region});
        this.props.fetchJobs(region)
    };

    onSetMyLocationButtonClicked = () => {

    }

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


