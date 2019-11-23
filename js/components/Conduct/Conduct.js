import React, {Component} from 'react';
import {
  Animated,
  UIManager,
  Platform,
  TouchableOpacity,
  LayoutAnimation,
  Text,
  View,
} from 'react-native';
import {Typo__Default} from '../../components';
import styles from './styles';
import {THEME} from '../../config';

class Conduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      spinValue: new Animated.Value(0),
      symbol: '+',
    };

    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }

  spinIcon = () => {
    Animated.timing(this.state.spinValue, {
      duration: 500,
      toValue: 1,
    }).start(animation => {
      if (animation.finished) {
        this.setState({
          spinValue: new Animated.Value(0),
          symbol: this.state.symbol === '+' ? '-' : '+',
        });
      }
    });
  };

  onPress() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    //   LayoutAnimation.easeInEaseOut;
    this.setState({isOpen: !this.state.isOpen});
    this.spinIcon();
  }

  render() {
    const {element} = this.props;

    const angle = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <TouchableOpacity onPress={() => this.onPress()}>
        <View style={{flexDirection: 'row'}}>
          <Animated.Text
            style={{
              ...styles.accordionHeader,
              width: 20,
              textAlign: 'center',
              transform: [{rotate: angle}],
            }}>
            {this.state.symbol}
          </Animated.Text>

          <Text style={{...styles.accordionHeader, marginLeft: THEME.spacing}}>
            {element.title}
          </Text>
        </View>
        {this.state.isOpen && (
          <Typo__Default>{element.description}</Typo__Default>
        )}
      </TouchableOpacity>
    );
  }
}

export default Conduct;
