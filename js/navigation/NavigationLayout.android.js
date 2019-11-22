import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {About, Faves, Map, Schedule, Session} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {sharedNavigationOptions} from './config';
import {THEME} from '../config';

const AboutStack = createStackNavigator(
  {
    About,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'About',
      title: 'About',
    }),
  },
);

const FavesStack = createStackNavigator(
  {
    Faves,
    Session,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Faves',
      title: 'Faves',
    }),
  },
);
const MapStack = createStackNavigator(
  {
    Map,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Map',
      title: 'Map',
    }),
  },
);
const ScheduleStack = createStackNavigator(
  {
    Schedule,
    Session,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Schedule',
      title: 'Schedule',
    }),
  },
);

ScheduleStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Ionicons name="md-calendar" size={25} color={tintColor} />
  ),
};
MapStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Ionicons name="md-map" size={25} color={tintColor} />
  ),
};
FavesStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Ionicons name="md-heart" size={25} color={tintColor} />
  ),
};
AboutStack.navigationOptions = {
  drawerIcon: ({tintColor}) => (
    <Ionicons
      name="md-information-circle-outline"
      size={25}
      color={tintColor}
    />
  ),
};

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack,
  },
  {
    tabBarOptions: {
      activeTintColor: THEME.color.white,
      inactiveTintColor: THEME.color.greyM,
      labelStyle: {
        fontFamily: THEME.typography.fontMain,
        fontSize: 10,
        paddingBottom: 0,
      },
      style: {
        backgroundColor: THEME.color.black,
      },
    },
  },
);
