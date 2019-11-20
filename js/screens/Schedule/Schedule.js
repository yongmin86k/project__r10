import React from 'react';
import {View, Text, Button} from 'react-native';

const Schedule = ({navigation}) => {
  return (
    <View>
      <Text>Hello Schedule</Text>
      <Button
        title="Go to session"
        onPress={() => {
          navigation.push('Session', []);
        }}
      />
    </View>
  );
};

export default Schedule;
