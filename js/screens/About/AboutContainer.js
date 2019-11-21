import React, {Component} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {QUERY_ALL_CONDUCTS} from '../../apollo/queries';
import {View, Text} from 'react-native';
import {Typo__Default} from '../../components';
import styles from './styles';
import About from './About';

const CodeOfConducts = () => {
  const {loading, error, data} = useQuery(QUERY_ALL_CONDUCTS, {
    variables: {order: 'order_ASC'},
  });
  if (loading) return <Typo__Default>Loading...</Typo__Default>;
  if (error) return <Typo__Default>Error: {error}</Typo__Default>;
  if (data) {
    return (
      <>
        {data.allConducts.map(element => (
          <View key={element.id}>
            <Text style={styles.accordionHeader}>{element.title}</Text>
            <Typo__Default>{element.description}</Typo__Default>
          </View>
        ))}
      </>
    );
  }
};

class AboutContainer extends Component {
  render() {
    return <About CodeOfConducts={CodeOfConducts} />;
  }
}

export default AboutContainer;
