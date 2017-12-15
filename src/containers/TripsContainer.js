/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedViews from '../components/AnimatedViews'
import firebase from 'react-native-firebase';
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

    constructor(props){
        super(props);

        this.state = {
          orders: []
        };

        firebase.database().ref("test" + "/orders/").orderByChild("orderMadeBy").equalTo("adamkraifgmailcom").on("value", (data) => {
          let orders = data.val();
          if (orders != null) {
            this.setState({orders: orders});
          }
        });
    }

    render() {
        const { orders } = this.state;

        if (!orders || orders.length === 0) {
            return <View/>;
        }

        let ordersArr = Object.keys(orders).map((order) => {
            return (<View key={order}><Text style={styles.welcomeText}>{orders[order].jobType}</Text></View>)
        });

        return (
            <View style={styles.wrapper}>
              <Text style={styles.welcomeText}>Trips Tab</Text>
                {ordersArr}
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
