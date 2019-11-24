import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  Platform,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Typo__Default, BeautifulButton} from '../../components';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {THEME} from '../../config';

const Speaker = ({navigation, info}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About the speaker</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
            size={32}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.modalView}>
        <ScrollView style={styles.modalWrap}>
          <Image source={{uri: info.image}} style={styles.speakerImg} />
          <Text style={styles.infoName}>{info.name}</Text>
          <Typo__Default>{info.bio}</Typo__Default>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(info.url);
            }}>
            <BeautifulButton>Read More on Wikipedia</BeautifulButton>
          </TouchableOpacity>
          {Platform.OS && <View style={{height: THEME.spacing * 4}} />}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Speaker;
