import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {About, Faves, Map, Schedule} from '../screens';

const AboutStack = createStackNavigator({
  About,
});

const FavesStack = createStackNavigator({
  Faves,
});
const MapStack = createStackNavigator({
  Map,
});
const ScheduleStack = createStackNavigator({
  Schedule,
});

export default createBottomTabNavigator({
  Schedule: ScheduleStack,
  Map: MapStack,
  Faves: FavesStack,
  About: AboutStack,
});
