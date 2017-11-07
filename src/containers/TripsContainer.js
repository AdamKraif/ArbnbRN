/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedViews from '../components/AnimatedViews'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TripsContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'ORDERS',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='ios-ionic'
        size={21}
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Trips Tab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
});
