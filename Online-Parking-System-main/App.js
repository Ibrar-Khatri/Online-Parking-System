/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  Image,
  Platform, StatusBar,
  Text
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { heightPercentageToDP as vh } from './src/responsive/responsive';
import AuthenticationScreen from './src/screen/authenticationScreen/authenticationScreen';
import MyDrawer from './src/screen/myDrawer/myDrawer';
import FeatureScreen from './src/screen/featureScreen/featureScreen';
import { Provider } from 'react-redux';
import store from './store/store';
import { LogBox } from 'react-native';
import MenuIconList from './src/component/menuIconList/menuIconList';


LogBox.ignoreLogs(['Warning: ...', 'Non-serializable values were found in the navigation state'])

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor='#00bfff' animated={true} />
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='authentication'>
              <Stack.Screen
                name="authentication-screen"
                component={AuthenticationScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="drawer"
                component={MyDrawer}
                options={{
                  headerShown: false,
                  // title: 'Online Parking System',
                  // headerTitleAlign: 'center',
                  // headerStyle: {
                  //   backgroundColor: '#00bfff',
                  //   height: vh(7),
                  // },
                  // // headerRight: () => <MenuIconList />,
                  // headerTitleStyle: {
                  //   fontWeight: 'bold',
                  //   lineHeight: vh(4),
                  //   marginBottom: 0,
                  //   color: 'white',
                  //   fontFamily:
                  //     Platform.OS === 'ios'
                  //       ? 'DM Serif Display'
                  //       : 'sans-serif-condensed',
                  //   fontSize: vh(3.5),
                  // }
                }}
              />
              <Stack.Screen
                name="featureScreen"
                component={FeatureScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </>
  );
};

export default App;
