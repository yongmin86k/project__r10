import React, {Component} from 'react';
import Schedule from './Schedule';
import {SessionLists} from '../../Hooks';

class ScheduleContainer extends Component {
  render() {
    return (
      <Schedule
        navigation={this.props.navigation}
        SessionLists={SessionLists}
      />
    );
  }
}

export default ScheduleContainer;
