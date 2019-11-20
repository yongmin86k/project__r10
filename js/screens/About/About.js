import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {QUERY_ALL_CONDUCTS} from '../../apollo/queries';
import {ScrollView, FlatList, ImageBackground, View, Text} from 'react-native';
import {Typo__Default, Typo__Header} from '../../components';
import styles from './styles';

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

const About = () => (
  <>
    <ScrollView style={styles.default}>
      <ImageBackground
        source={require('../../assets/images/r10_logo.png')}
        style={styles.logo}
        imageStyle={styles.logoImage}
      />
      <Typo__Default>
        R10 is a conference that focuses on just about any topic related to dev.
      </Typo__Default>
      <Typo__Header>Date & Venue</Typo__Header>
      <Typo__Default>
        The R10 conference will take place on Tuesday, June 27, 2019 in
        Vancouver, BC.
      </Typo__Default>
      <Typo__Header>Code of Conduct</Typo__Header>
      <CodeOfConducts />
      <Typo__Default>© RED Academy 2019</Typo__Default>
    </ScrollView>
  </>
);

export default About;
