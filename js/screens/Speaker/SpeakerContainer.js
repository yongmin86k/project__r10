import React, {Component} from 'react';
import Speaker from './Speaker';

class SpeakerContainer extends Component {
  render() {
    const {navigation} = this.props;
    const {params} = navigation.state;

    return <Speaker navigation={navigation} info={params[0]} />;
  }
}

export default SpeakerContainer;
