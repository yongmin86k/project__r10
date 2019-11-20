import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {QUERY_ALL_SESSIONS} from '../../apollo/queries';
import moment from 'moment';
import {View, SectionList} from 'react-native';
import {
  Separator__Table,
  Session__Header,
  Session__Content,
  Typo__Default,
  Typo__Header,
} from '../../components';

const formatSessionData = sessions => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.startTime);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({title: curr.startTime, data: [curr]});
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};

const SessionLists = () => {
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
          console.log(item);
          return (
            <Session__Content title={item.title} location={item.location} />
          );
        }}
        ItemSeparatorComponent={() => <Separator__Table />}
      />
    );
  }
};

const Schedule = ({navigation}) => {
  return <SessionLists />;
};

export default Schedule;
