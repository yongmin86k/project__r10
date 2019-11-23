import React, {Component} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {QUERY_ALL_CONDUCTS} from '../../apollo/queries';
import {Conduct, Typo__Default} from '../../components';
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
        {data.allConducts.map(element => {
          return <Conduct key={element.id} element={element} />;
        })}
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
