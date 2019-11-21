import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationLayout from './NavigationLayout';
import {Speaker as SpeakerModal} from '../screens';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      Speaker: SpeakerModal,
    },
    {
      headerMode: 'none',
      mode: 'modal',
    },
  ),
);
