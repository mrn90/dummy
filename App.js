/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux'
import store from './src/store'
import Navigation from './src/Navigation';

const App = () => {
  return (
    <Provider store={store}> 
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        // backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigation />
    </View>
     </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
