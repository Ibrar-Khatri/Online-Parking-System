import React from 'react';
import {Image, Text} from 'react-native';

function HomeScreen() {
  return (
    <>
      <Image
        source={require('../../assets/photo-1545179605-1296651e9d43.jpeg')}
        style={{flex: 1}}
      />
    </>
  );
}

export default HomeScreen;
