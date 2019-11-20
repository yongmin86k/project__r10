import {createAppContainer} from 'react-navigation';
import NavigationLayout from './NavigationLayout';
import {createStackNavigator} from 'react-navigation-stack';
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
