import React, {Component} from 'react';
import Faves from './Faves';
import {SessionLists} from '../../Hooks';

class FavesContainer extends Component {
  render() {
    return (
      <Faves navigation={this.props.navigation} SessionLists={SessionLists} />
    );
  }
}

export default FavesContainer;
