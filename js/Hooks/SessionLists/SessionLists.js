import React from 'react';
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
import {FavesContext} from '../../context/FavesContext';

const SessionLists = ({navigation}) => {
  const {loading, error, data} = useQuery(QUERY_ALL_SESSIONS, {
    variables: {order: 'startTime_ASC'},
  });
  if (loading) return <Typo__Default>Loading...</Typo__Default>;
  if (error) return <Typo__Default>Error: {error}</Typo__Default>;
  if (data) {
    return (
      <FavesContext.Consumer>
        {({faveIds}) => {
          let formattedData;
          if (navigation.state.routeName === 'Faves') {
            let filteredData = data.allSessions.filter(session =>
              faveIds.includes(session.id),
            );
            formattedData = formatSessionData(filteredData);
          } else {
            formattedData = formatSessionData(data.allSessions);
          }
          return (
            <SectionList
              sections={formattedData}
              keyExtractor={item => item.id}
              renderSectionHeader={({section: {title}}) => {
                const time = moment(title).format('hh:mm A');
                return <Session__Header>{`${time}`}</Session__Header>;
              }}
              renderItem={({item}) => {
                const isFave = faveIds.includes(item.id);

                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Session', [item]);
                    }}>
                    <Session__Content
                      title={item.title}
                      location={item.location}
                      isFave={isFave}
                    />
                  </TouchableOpacity>
                );
              }}
              ItemSeparatorComponent={() => <Separator__Table />}
            />
          );
        }}
      </FavesContext.Consumer>
    );
  }
};

export default SessionLists;
