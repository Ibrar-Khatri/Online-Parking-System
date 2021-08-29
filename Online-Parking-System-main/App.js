/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Platform, StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import AuthenticationScreen from './src/screen/authenticationScreen/authenticationScreen';
import HomeScreen from './src/screen/homeScreen/homeScreen';
import FeatureScreen from './src/screen/featureScreen/featureScreen';
import { heightPercentageToDP as vh } from './src/responsive/responsive';
import { Provider } from 'react-redux';
import store from './store/store';
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['Warning: ...','Non-serializable values were found in the navigation state'])

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <StatusBar backgroundColor='#00bfff' animated={true}/>
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="authentication-screen"
                component={AuthenticationScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="main-screen"
                component={HomeScreen}
                options={{
                  title: 'Online Parking System',
                  headerTitleAlign: 'center',
                  headerStyle: {
                    backgroundColor: '#00bfff',
                    height: vh(6),
                  },
                  headerTintColor: 'white',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    lineHeight: vh(4),
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
