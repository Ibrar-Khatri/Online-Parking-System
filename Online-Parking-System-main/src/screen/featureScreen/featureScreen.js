import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import { heightPercentageToDP as vh } from '../../responsive/responsive';
import AddBookingScreen from './addBookingScreen/addBookingScreen';
import UserProfileScreen from './profileScreen/profileScreen';

let Stack = createStackNavigator();

function FeatureScreen({ route }) {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          title: route.params.title,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00bfff',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: vh(3),
          },
          headerBackTitleVisible: false
        }}
        initialRouteName={route.params.initialRouteName}
      >
        <Stack.Screen name="add-booking" component={AddBookingScreen} initialParams={{ location: route.params.location }} />
        <Stack.Screen name="user-profile" component={UserProfileScreen} />
      </Stack.Navigator>
    </>
  );
}

export default FeatureScreen;
