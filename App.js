import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/app/store';
import CheckAuth from './src/components/CheckAuth';

const App = () => {

  return (
    <Provider store={store}>
      <StatusBar barStyle='light-content' />
      <CheckAuth />
    </Provider>
  );
};

export default App;
