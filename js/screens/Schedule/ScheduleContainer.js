import React, {Component} from 'react';
import Schedule from './Schedule';

class ScheduleContainer extends Component {
  render() {
    return <Schedule navigation={this.props.navigation} />;
  }
}

export default ScheduleContainer;
