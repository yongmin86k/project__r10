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
import Ionicons from 'react-native-vector-icons/Ionicons';

const Session = ({data, faveIds, addFaveSession, removeFaveSession}) => {
  const time = moment(data.startTime).format('hh:mm A');
  const isFave = faveIds.includes(data.id);

  return (
    <ScrollView style={styles.view}>
      <View style={styles.wrapHeader}>
        <Text style={styles.subHeader}>{data.location}</Text>
        {isFave ? (
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
            style={styles.iconHeart}
            size={24}
            color="red"
          />
        ) : null}
      </View>

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
          !isFave ? addFaveSession(data.id) : removeFaveSession(data.id);
        }}>
        <LinearGradient
          colors={[THEME.color.purple, THEME.color.blue]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 0.0}}
          style={styles.buttonBG}>
          <Text accessibilityRole="button" style={styles.button}>
            {!isFave ? 'Add to Faves' : 'Remove from Faves'}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Session;
