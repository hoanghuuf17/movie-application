/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StatusBar,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import Root from './src/navigation/Root';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <>
      <StatusBar barStyle='light-content'/>
      <Root/>
    </>
  );
};

export default App;
