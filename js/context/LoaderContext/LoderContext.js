import React, { Component } from "react";
import {
  ActivityIndicator,
  Platform,
  UIManager,
  LayoutAnimation
} from "react-native";
import styles from "./styles";

export const LoaderContext = React.createContext();

class LoaderProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }

  changeLoadingState = value => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (value === true) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 500);
    } else {
      this.setState({ loading: true });
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <LoaderContext.Provider
          value={{
            loadingState: this.state.loading,
            changeLoadingState: this.changeLoadingState
          }}
        >
          <>
            {this.props.children}
            <ActivityIndicator
              size="large"
              color={Platform.OS === "android" ? "white" : "gray"}
              style={styles.loader}
            />
          </>
        </LoaderContext.Provider>
      );
    } else {
      return (
        <LoaderContext.Provider value={{ loadingState: this.state.loading }}>
          {this.props.children}
        </LoaderContext.Provider>
      );
    }
  }
}

export default LoaderProvider;
