import React, { Component } from "react";
import {
  Animated,
  UIManager,
  Platform,
  TouchableOpacity,
  LayoutAnimation,
  Text,
  View
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

class Conduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      spinValue: new Animated.Value(0),
      symbol: "+"
    };

    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }

  spinIcon = () => {
    Animated.timing(this.state.spinValue, {
      duration: 500,
      toValue: 1
    }).start(animation => {
      if (animation.finished) {
        this.setState({
          spinValue: new Animated.Value(0),
          symbol: this.state.isOpen ? "-" : "+"
        });
      }
    });
  };

  onPress() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ isOpen: !this.state.isOpen });
    this.spinIcon();
  }

  render() {
    const { element } = this.props;

    const angle = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <TouchableOpacity onPress={() => this.onPress()}>
        <View style={styles.header}>
          <Animated.Text
            style={{
              ...styles.accordionHeader,
              width: 16,
              textAlign: "center",
              transform: [{ rotate: angle }]
            }}
          >
            {this.state.symbol}
          </Animated.Text>

          <Text style={{ ...styles.accordionHeader, marginLeft: 12 }}>
            {element.title}
          </Text>
        </View>
        {this.state.isOpen && (
          <View style={styles.description}>
            <View style={styles.gap} />
            <Text style={styles.text}>{element.description}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

export default Conduct;

Conduct.propTypes = {
  element: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    order: PropTypes.number,
    title: PropTypes.string
  })
};
