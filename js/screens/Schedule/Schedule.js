import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {QUERY_ALL_SESSIONS} from '../../apollo/queries';
import {SectionList, View, Text, Button} from 'react-native';
import {Typo__Default, Typo__Header} from '../../components';

const SessionLists = () => {
  const {loading, error, data} = useQuery(QUERY_ALL_SESSIONS, {
    variables: {order: 'startTime_ASC'},
  });
  if (loading) return <Typo__Default>Loading...</Typo__Default>;
  if (error) return <Typo__Default>Error: {error}</Typo__Default>;
  if (data) {
    console.log(data.allSessions);
    return <Text>Data is loaded</Text>;
  }
};

const Schedule = ({navigation}) => {
  return <SessionLists />;
};

export default Schedule;

{
  /* <View>
  <Text>Hello Schedule</Text>
  <Button
    title="Go to session"
    onPress={() => {
      navigation.push('Session', []);
    }}
  />
</View> */
}
