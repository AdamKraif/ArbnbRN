/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import AnimatedViews from '../components/AnimatedViews'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
const screen = Dimensions.get('window');

export default class MapContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'MAP',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='ios-contact-outline'
                size={22}
                color={tintColor}
            />
        ),
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <AnimatedViews style={styles.map}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: (screen.height - 80 - 50 - 50),
        position: 'absolute',
        left: 0,
        top: 80,
        right: 0,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: screen.height - 80 - 50 - 50,
        zIndex: 9999999
    },
    map: {
        flex: 1
    },
});
