import React from 'react';
import moment from 'moment';
import {
  Platform,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Separator__Table, Typo__Default, Typo__Header} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {THEME} from '../../config';
import Icon from 'react-native-vector-icons/Ionicons';

const Session = ({data}) => {
  const time = moment(data.startTime).format('hh:mm A');
  return (
    <ScrollView style={styles.view}>
      <Text style={styles.subHeader}>{data.location}</Text>

      <Icon
        name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
        size={16}
        color="red"
      />

      <Typo__Header>{data.title}</Typo__Header>
      <Text style={styles.time}>{time}</Text>
      <Typo__Default>{data.description}</Typo__Default>
      <Text style={styles.presentedBy}>Presented by:</Text>
      <TouchableOpacity>
        <View style={styles.speakerView}>
          <Image style={styles.speakerImg} source={{uri: data.speaker.image}} />
          <Text style={styles.speakerName}>{data.speaker.name}</Text>
        </View>
      </TouchableOpacity>
      <Separator__Table />
      <TouchableOpacity
        onPress={() => {
          console.log('Pressed');
        }}>
        <LinearGradient
          colors={[THEME.color.purple, THEME.color.blue]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 0.0}}
          style={styles.buttonBG}>
          <Text accessibilityRole="button" style={styles.button}>
            Add to Faves
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Session;
