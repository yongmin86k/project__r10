import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
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

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;

        if (routeName === 'Schedule') {
          iconName = `ios-calendar`;
        } else if (routeName === 'Map') {
          iconName = `ios-map`;
        } else if (routeName === 'Faves') {
          iconName = `ios-heart`;
        } else if (routeName === 'About') {
          iconName = `ios-information-circle`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: THEME.color.white,
      inactiveTintColor: 'rgba(255,255,255,0.4)',
      labelStyle: {
        fontFamily: THEME.typography.fontMain,
        fontSize: 10,
        paddingBottom: 0,
      },
      tabStyle: {
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
    },
  },
);
