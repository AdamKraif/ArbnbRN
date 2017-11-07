/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Animated
} from 'react-native';

export default class TripsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            animation: new Animated.Value(80)
        };
    }


    toggleSearchBar(shouoldBeExpended) {
        // if (shouoldBeExpended) {
        //     this.setState({initialHeight: 250})
        // } else {
        //     this.setState({initialHeight: 110})
        // }

        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: (shouoldBeExpended ? 160 : 80)
            }
        ).start();
    }

    render() {
        return (
            <Animated.View  style={[styles.wrapper, {height:  this.state.animation}]}>
              <View style={styles.searchContainer}>
                <Icon
                    name='ios-search'
                    size={20}
                    color={colors.gray04}
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.inputText}
                    editable = {true}
                    onChangeText={(text) => this.setState({text})}
                    placeholder={'Eg: "Plumber"'}
                    value={this.state.text}
                    onFocus={() => this.toggleSearchBar(true)}
                    onBlur={() => this.toggleSearchBar(false)}
                />
              </View>
                <View style={[styles.searchContainer, styles.seconedInput]}>
                    <Icon
                        name='ios-search'
                        size={20}
                        color={colors.gray04}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.inputText}
                        editable = {true}
                        onChangeText={(text) => this.setState({text})}
                        placeholder={'Eg: "Plumber"'}
                        value={this.state.text}
                        onFocus={() => this.toggleSearchBar(true)}
                        onBlur={() => this.toggleSearchBar(false)}
                    />
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 99,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: colors.jaxee,
        width: '100%',
        overflow: 'hidden'
        // height: 110,
    },
    searchContainer: {
        display: 'flex',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.gray03,
        backgroundColor: colors.white,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        borderRadius: 3,
        height: 41,
        marginTop: 22,
        marginLeft: 20,
        marginRight: 20,
    },
    seconedInput: {
      marginTop: 25
    },
    searchIcon: {
        position: 'absolute',
        left: 18,
        top: 9,
    },
    inputText: {
        display: 'flex',
        marginTop: 11,
        marginLeft: 44,
        color: colors.gray04,
        zIndex: 999999,
        borderBottomWidth: 0
    }
});