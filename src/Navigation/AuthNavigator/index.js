import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen'
import SearchScreen from '../../screens/SearchScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{
      gestureDirection: 'vertical',
      headerShown: false
    }}>
      <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
      <AuthStack.Screen name="SearchScreen" component={SearchScreen} />
      </AuthStack.Navigator>
  );
};

export default AuthNavigator;
