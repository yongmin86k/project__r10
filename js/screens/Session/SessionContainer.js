import React, {Component} from 'react';
import Session from './Session';

class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };

  render() {
    const {navigation} = this.props;
    const {params} = navigation.state;

    return <Session data={params[0]} />;
  }
}

export default SessionContainer;
