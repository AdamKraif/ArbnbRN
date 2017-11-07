import { TabNavigator } from 'react-navigation';
import ExploreContainer from '../containers/ExploreContainer';
import SavedContainer from '../containers/SavedContainer';
import TripsContainer from '../containers/TripsContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import colors from '../styles/colors';

const LoggedInNavigator = TabNavigator({
    ExploreContainer: { screen: ExploreContainer },
    SavedContainer: { screen: SavedContainer },
    TripsContainer: { screen: TripsContainer },
    InboxContainer: { screen: InboxContainer },
    ProfileContainer: { screen: ProfileContainer },
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
        style: {
            bottom: 0,
            backgroundColor: '#f3f3f3',
        },
        labelStyle: {
            fontWeight: '600',
            color: '#545454'
        },
        tabStyle: {
            padding: 0,
            paddingTop: 4,
            paddingBottom: 4,
            height: 50
        },
        indicatorStyle: {
            borderBottomWidth: 1,
            borderBottomColor: colors.jaxee,
        },
        activeTintColor: colors.pink,
    }
});

export default LoggedInNavigator;