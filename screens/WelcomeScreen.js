import React, {Component} from 'react';
import strings from "../contants/strings";
import Slide from "../components/Slide";

const TUTORIAL_DATA = [
    {id: 1, title: strings.tutorialFirstPage, image: require('../assets/icon.png')},
    {id: 2, title: strings.tutorialSecondPage, image: require('../assets/job_map.png')},
    {id: 3, title: strings.tutorialThirdPage, image: require('../assets/job_list.png')}
];

class WelcomeScreen extends Component {

    render(){
        return (
            <Slide
                data={TUTORIAL_DATA}
                onCompleteCallback={this.onSlidesCompleted.bind(this)}/>
        );
    }

    onSlidesCompleted() {
        console.log('hello');
        this.props.navigation.navigate('auth')
    }

}

export default WelcomeScreen
