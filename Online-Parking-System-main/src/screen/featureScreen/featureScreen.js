import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import { heightPercentageToDP as vh } from '../../responsive/responsive';
import AddBookingScreen from './addBookingScreen/addBookingScreen';
import UserProfileScreen from './profileScreen/profileScreen';
import style from './featureScreenStyle'

let Stack = createStackNavigator();

function FeatureScreen({ route }) {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          title: route.params.title,
          headerStyle: style.headerStyle,
          headerTitleStyle: style.headerTitleStyle,
          headerTintColor: 'white',
          headerBackTitleVisible: false
        }}
        initialRouteName={route.params.initialRouteName}
      >
        <Stack.Screen name="add-booking" component={AddBookingScreen} initialParams={{ area: route.params.area }} />
        <Stack.Screen name="user-profile" component={UserProfileScreen} />
      </Stack.Navigator>
    </>
  );
}

// headerTitleStyle: style.headerTitleStyle,
//   headerStyle: style.headerStyle,


export default FeatureScreen;
