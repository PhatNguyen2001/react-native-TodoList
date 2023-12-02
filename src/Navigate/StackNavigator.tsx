import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'src/view/Screens/HomeScreen';
import TabNavigator from './TabNavigator';
import LoginScreen from 'src/view/Screens/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShadowVisible: true,
        headerTitle: '',
        headerShown: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}
