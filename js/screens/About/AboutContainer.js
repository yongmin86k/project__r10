import React, { Component } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALL_CONDUCTS } from "../../apollo/queries";
import { Conduct, Typo__Default } from "../../components";
import About from "./About";
import { LoaderContext } from "../../context/LoaderContext";

const CodeOfConducts = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_CONDUCTS, {
    variables: { order: "order_ASC" }
  });
  if (loading) return <></>;
  if (error) return <Typo__Default>Error: {error}</Typo__Default>;
  if (data) {
    return (
      <LoaderContext.Consumer>
        {value => {
          if (value && value.changeLoadingState) {
            value.changeLoadingState(true);
          }
          return data.allConducts.map(element => {
            return <Conduct key={element.id} element={element} />;
          });
        }}
      </LoaderContext.Consumer>
    );
  }
};

class AboutContainer extends Component {
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
          return <About CodeOfConducts={CodeOfConducts} />;
        }}
      </LoaderContext.Consumer>
    );
  }
}

export default AboutContainer;
