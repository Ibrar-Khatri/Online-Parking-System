/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Platform,
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
import AuthenticationScreen from './src/screen/authenticationScreen/authenticationScreen';
import HomeScreen from './src/screen/homeScreen/homeScreen';
import FeatureScreen from './src/screen/featureScreen/featureScreen';
import {heightPercentageToDP as vh} from './src/responsive/responsive';
import {Provider} from 'react-redux';
import store from './store/store';
import SplashScreen from './src/screen/splashScreen/spashScreen';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="splash-screen"
                component={SplashScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="authentication-screen"
                component={AuthenticationScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="home-screen"
                component={HomeScreen}
                options={{
                  title: 'Online Parking System',
                  headerTitleAlign: 'center',
                  headerStyle: {
                    backgroundColor: '#00bfff',
                  },
                  headerTintColor: 'white',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontFamily:
                      Platform.OS === 'ios'
                        ? 'DM Serif Display'
                        : 'sans-serif-condensed',
                    fontSize: vh(3.5),
                  },
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
