/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from '../components/explore/Categories';
import Listings from '../components/explore/Listings';
import categoriesList from '../data/categories';
import colors from '../styles/colors';
import SearchBar from '../components/SearchBar';
import listings from '../data/listings';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../redux/actions'
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
} from 'react-native';

class CategoriesContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='ios-search'
                size={22}
                color={tintColor}
            />
        ),
    };

    constructor(props) {
        super(props);

        this.state = {
            listings: {},
        }
        this.addToFav = this.addToFav.bind(this);
    }

    addToFav(added, itemId) {
        const addedToFav = this.props.addedToFavorite;
        if (added) {
            addedToFav.push(itemId);
        } else {
            const index = addedToFav.indexOf(itemId);
            addedToFav.splice(index, 1);
        }
        this.props.addToFavorite(addedToFav);
    }

    componentWillMount() {
        const listingsArray = [];

        listings.map((val, i) => {
            listingsArray.push(
                <View
                    key={i}
                    style={styles.listingWrapper}
                >
                    <Listings
                        key={i}
                        title={val.title}
                        boldTitle={val.boldTitle}
                        listings={val.listings}
                        showAddToFav={val.showAddToFav}
                        onAddToFav={this.addToFav}
                    />
                </View>
            );
        });
        this.setState({
            listings: listingsArray,
        });
    }

    render() {
        return (
            <ScrollView
                style={styles.scrollview}
                contentContainerStyle={styles.scrollViewContent}
            >
                <Text style={styles.heading}>Explore Jaxee</Text>
                <View style={styles.categories}>
                    <Categories categories={categoriesList} />
                </View>
                {this.state.listings}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        top: 115,
    },
    scrollViewContent: {
        paddingBottom: 80,
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        paddingLeft: 20,
        marginBottom: 20,
        color: colors.gray02,
    },
    listingWrapper: {
        marginBottom: 45,
    },
    categories: {
        marginBottom: 40,
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        addedToFavorite: state.addedToFavorite,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
