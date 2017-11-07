/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import createReducer from '../helpers/createReducer'
import { NavigationActions } from 'react-navigation';
import * as types from '../actions/types'
import { AppNavigator } from '../../navigators/AppNavigator';
import { StatusBar } from 'react-native';

// const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut');
const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedIn');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
);

export const nav = (state = initialNavState, action) => {
  let nextState = AppNavigator.router.getStateForAction(action, state);
  if (action.routeName === 'TurnOnNotifications' || action.routeName === 'LoggedIn') {
    // StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBarStyle('light-content', true);
  } else {
    StatusBar.setBarStyle('light-content', true);  	
  }
  return nextState || state;
}
