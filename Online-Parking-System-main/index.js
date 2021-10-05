/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './store/store';

const RNRedux = () => (
    <Provider store={store}>
        <NavigationContainer>
            <App />
        </NavigationContainer>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
