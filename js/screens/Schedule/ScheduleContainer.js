import React, { Component } from "react";
import { LoaderContext } from "../../context/LoaderContext";
import Schedule from "./Schedule";
import { SessionLists } from "../../components";

class ScheduleContainer extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <LoaderContext.Consumer>
        {({ changeLoadingState }) => {
          navigation.addListener("didBlur", () => {
            if (changeLoadingState) {
              changeLoadingState(false);
            }
          });
          return (
            <Schedule navigation={navigation} SessionLists={SessionLists} />
          );
        }}
      </LoaderContext.Consumer>
    );
  }
}

export default ScheduleContainer;
