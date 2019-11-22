import React from 'react';

const Faves = ({navigation, SessionLists}) => {
  console.log(SessionLists);
  return <SessionLists navigation={navigation} />;
};

export default Faves;
