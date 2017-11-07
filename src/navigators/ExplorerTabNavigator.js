import { TabNavigator } from 'react-navigation';
import CategoriesContainer from '../containers/CategoriesContainer';
import MapContainer from "../containers/MapContainer";
import colors from '../styles/colors';


export const ExplorerTabNavigator = TabNavigator({
    Explorer: {
        screen: CategoriesContainer,
    },
    Map: {
        screen: MapContainer,
    },
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
        style: {
            top: 80,
        },
        labelStyle: {
            fontWeight: '600',
        },
        tabStyle: {
            backgroundColor: colors.white,
            height: 50,
            alignContent: 'center',
            alignItems: 'center',

        },
        indicatorStyle: {
            borderBottomWidth: 1,
            borderBottomColor: colors.jaxee,
        }
    },
});

