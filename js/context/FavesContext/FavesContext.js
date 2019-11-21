import React, {Component} from 'react';
import {addFave, removeFave, getAllFaves} from '../../config/models';

export const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  componentDidMount() {
    this.getFavedSessionIds();
  }

  getFavedSessionIds = async () => {
    try {
      const faves = await getAllFaves();
      const ids = faves.map(fave => fave[0]);
      this.setState({faveIds: ids});
    } catch (e) {
      console.log(e);
    }
  };

  addFaveSession = async sessionId => {
    try {
      const newFave = await addFave(sessionId);
      if (newFave) {
        this.setState({faveIds: [...this.state.faveIds, newFave.id]});
      }
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };

  removeFaveSession = async sessionId => {
    try {
      await removeFave(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
