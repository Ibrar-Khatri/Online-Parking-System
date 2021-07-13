/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NativeBaseProvider} from 'native-base';
import SigninScreen from './src/screen/signinScreen';
import SignupScreen from './src/screen/signupScreen';
import MainScreen from './src/screen/mainScreen';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="signin-screen"
              component={SigninScreen}
              Header="false"
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="signup-screen"
              component={SignupScreen}
              Header="false"
              options={{headerShown: false}}
            /> */}
            <Stack.Screen
              name="main-screen"
              component={MainScreen}
              options={{
                title: 'Online Parking System',
                headerStyle: {
                  backgroundColor: 'blue',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

export default App;
