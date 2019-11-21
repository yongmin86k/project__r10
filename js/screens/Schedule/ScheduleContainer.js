import React, {Component} from 'react';
import Schedule from './Schedule';
import {useQuery} from '@apollo/react-hooks';
import {QUERY_ALL_SESSIONS} from '../../apollo/queries';
import moment from 'moment';
import {TouchableOpacity, SectionList} from 'react-native';
import {
  Separator__Table,
  Session__Header,
  Session__Content,
  Typo__Default,
} from '../../components';
import formatSessionData from '../../lib/dataFormatHelpers';

const SessionLists = ({navigation}) => {
  const {loading, error, data} = useQuery(QUERY_ALL_SESSIONS, {
    variables: {order: 'startTime_ASC'},
  });
  if (loading) return <Typo__Default>Loading...</Typo__Default>;
  if (error) return <Typo__Default>Error: {error}</Typo__Default>;
  if (data) {
    const formattedData = formatSessionData(data.allSessions);

    return (
      <SectionList
        sections={formattedData}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {title}}) => {
          const time = moment(title).format('hh:mm A');
          return <Session__Header>{`${time}`}</Session__Header>;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.push('Session');
              }}>
              <Session__Content title={item.title} location={item.location} />
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <Separator__Table />}
      />
    );
  }
};

class ScheduleContainer extends Component {
  render() {
    return (
      <Schedule
        navigation={this.props.navigation}
        SessionLists={SessionLists}
      />
    );
  }
}

export default ScheduleContainer;
