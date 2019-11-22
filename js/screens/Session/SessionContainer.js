import React, {Component} from 'react';
import {FavesContext} from '../../context/FavesContext';
import Session from './Session';

class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };

  render() {
    const {navigation} = this.props;
    const {params} = navigation.state;

    return (
      <FavesContext.Consumer>
        {({faveIds, addFaveSession, removeFaveSession}) => (
          <Session
            navigation={navigation}
            data={params[0]}
            faveIds={faveIds}
            addFaveSession={addFaveSession}
            removeFaveSession={removeFaveSession}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;
